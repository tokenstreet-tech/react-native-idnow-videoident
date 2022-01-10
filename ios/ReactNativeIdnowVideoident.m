#import "ReactNativeIdnowVideoident.h"

@implementation ReactNativeIdnowVideoident {
	IdnowViewController* idnowViewController;
}

RCT_EXPORT_MODULE()

// Example method
// See // https://reactnative.dev/docs/native-modules-ios
RCT_EXPORT_METHOD(startVideoIdent:(NSDictionary *)options callback:(RCTResponseSenderBlock)callback) {
	idnowViewController = [[IdnowViewController alloc] initWithOptions:options];
	[idnowViewController startVideoIdent:callback];
}

@end
