#import "ReactNativeIdnowVideoident.h"

@implementation ReactNativeIdnowVideoident

- (dispatch_queue_t)methodQueue {
	return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE()

// Example method
// See // https://reactnative.dev/docs/native-modules-ios
RCT_EXPORT_METHOD(startVideoIdent:(NSDictionary *)options callback:(RCTResponseSenderBlock)callback) {
	IdnowViewController *idnowViewController = [[IdnowViewController alloc] initWithOptions:options];
	[idnowViewController startVideoIdent:callback];
}

@end
