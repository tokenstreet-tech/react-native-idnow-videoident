#import "ReactNativeIdnowVideoident.h"

@implementation ReactNativeIdnowVideoident {
	IdnowViewController* idnowViewController;
}

RCT_EXPORT_MODULE()

// Example method
// See // https://reactnative.dev/docs/native-modules-ios
RCT_EXPORT_METHOD(startVideoIdent : (NSDictionary *)settings errorCallback : (RCTResponseSenderBlock)errorCallback successCallback : (RCTResponseSenderBlock)successCallback) {
	idnowViewController = [[IdnowViewController alloc] initializeWithSettings:settings];
	[idnowViewController startVideoIdent:errorCallback successCallback:successCallback];
}

@end
