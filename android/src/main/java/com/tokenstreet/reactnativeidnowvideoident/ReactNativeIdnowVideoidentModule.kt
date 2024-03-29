/*
 * Copyright © 2022 tokenstreet GmbH.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.tokenstreet.reactnativeidnowvideoident

import android.app.Activity
import android.content.Intent
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.BaseActivityEventListener
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableMap
import com.tokenstreet.reactnativeidnowvideoident.ReactNativeIdnowSDK.initializeWithSettings
import de.idnow.sdk.IDnowSDK

class ReactNativeIdnowVideoidentModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private val reactContext: ReactApplicationContext
    private var globalErrorCallback: Callback? = null
    private var globalSuccessCallback: Callback? = null

    init {
        reactContext.addActivityEventListener(
            object : BaseActivityEventListener() {
                override fun onActivityResult(
                    activity: Activity?,
                    requestCode: Int,
                    resultCode: Int,
                    data: Intent?
                ) {
                    if (requestCode == IDnowSDK.REQUEST_ID_NOW_SDK) {
                        resultCallback(resultCode, null)
                    }
                }
            }
        )
        this.reactContext = reactContext
    }

    override fun getName(): String {
        return NAME
    }

    private fun resultCallback(resultCode: Int, e: Exception?) {
        val params: WritableMap = Arguments.createMap()
        val resultCodeKey = "resultCode"
        val errorMessageKey = "errorMessage"
        when (resultCode) {
            IDnowSDK.RESULT_CODE_FAILED -> {
                params.putString(resultCodeKey, "FAILED")
                if (e != null) params.putString(errorMessageKey, e.message)
                globalErrorCallback?.invoke(params)
            }
            IDnowSDK.RESULT_CODE_SUCCESS -> {
                params.putString(resultCodeKey, "SUCCESS")
                globalSuccessCallback?.invoke(params)
            }
            IDnowSDK.RESULT_CODE_CANCEL -> {
                params.putString(resultCodeKey, "CANCEL")
                if (e != null) params.putString(errorMessageKey, e.message)
                globalErrorCallback?.invoke(params)
            }
            IDnowSDK.RESULT_CODE_WRONG_IDENT, IDnowSDK.RESULT_CODE_FALLBACK_VID, 11, IDnowSDK.RESULT_CODE_INTERNAL -> {
                params.putString(resultCodeKey, "INTERNAL_ERROR")
                if (e != null) params.putString(errorMessageKey, e.message)
                globalErrorCallback?.invoke(params)
            }
            else -> {
                params.putString(resultCodeKey, "INTERNAL_ERROR")
                if (e != null) params.putString(errorMessageKey, e.message)
                globalErrorCallback?.invoke(params)
            }
        }
    }

    @ReactMethod
    fun startVideoIdent(
        settings: ReadableMap,
        successCallback: Callback,
        errorCallback: Callback
    ) {
        globalErrorCallback = errorCallback
        globalSuccessCallback = successCallback
        val currentActivity: Activity? = getCurrentActivity()
        try {
            val instance = initializeWithSettings(currentActivity, settings, reactContext)
            instance.start(IDnowSDK.getTransactionToken())
        } catch (e: Exception) {
            resultCallback(IDnowSDK.RESULT_CODE_INTERNAL, e)
        }
    }

    companion object {
        const val NAME = "ReactNativeIdnowVideoident"
    }
}
