//
//  ReactNativeIdnowVideoident.m
//  ReactNativeIdnowVideoident
//
//  Created by Daniel Reichhart on 09.01.22.
//  Copyright © 2022 tokenstreet GmbH.
//
//  This source code is licensed under the MIT license found in the
//  LICENSE file in the root directory of this source tree.
//

#import "ReactNativeIdnowVideoident.h"

@implementation ReactNativeIdnowVideoident {
	IdnowViewController* idnowViewController;
}

RCT_EXPORT_MODULE()

// Example method
// See // https://reactnative.dev/docs/native-modules-ios
RCT_EXPORT_METHOD(startVideoIdent : (NSDictionary *)settings successCallback : (RCTResponseSenderBlock)successCallback errorCallback : (RCTResponseSenderBlock)errorCallback) {
	idnowViewController = [[IdnowViewController alloc] initializeWithSettings:settings];
	[idnowViewController startVideoIdent:errorCallback successCallback:successCallback];
}

@end
