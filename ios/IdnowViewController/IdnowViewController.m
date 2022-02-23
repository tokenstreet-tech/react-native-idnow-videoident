//
//  IdnowViewController.m
//  ReactNativeIdnowVideoident
//
//  Created by Daniel Reichhart on 09.01.22.
//  Copyright © 2022 tokenstreet GmbH. All rights reserved.
//

#import "IdnowViewController.h"

@implementation IdnowViewController
- (void)startVideoIdent: (RCTResponseSenderBlock)errorCallback successCallback:(RCTResponseSenderBlock)successCallback {

	UIViewController *rootViewController = [[[UIApplication sharedApplication] delegate] window].rootViewController;

	self.idnowController.delegate  = nil;
	__weak typeof(self) weakSelf   = self;

	// Initialize identification using blocks (alternatively you can set the delegate and implement the IDnowControllerDelegate protocol)
	[self.idnowController initializeWithCompletionBlock:^(BOOL success, NSError * _Nullable error, BOOL canceledByUser) {
	         NSMutableDictionary *identificationResult = [[NSMutableDictionary alloc] init];
	         NSString* resultCode = [self getResultCode:success canceledByUser:canceledByUser];
	         [identificationResult setValue:resultCode forKey:@"resultCode"];
	         if ( success ) {
			 [weakSelf.idnowController startIdentificationFromViewController:rootViewController withCompletionBlock:^(BOOL success, NSError * _Nullable error, BOOL canceledByUser)  {
			          NSString* resultCode = [self getResultCode:success canceledByUser:canceledByUser];
			          [identificationResult setValue:resultCode forKey:@"resultCode"];
			          if ( success ) {
					  successCallback(@[identificationResult]);
					  return;
				  } else {
					  [identificationResult setValue:error.localizedDescription forKey:@"errorMessage"];
					  errorCallback(@[identificationResult]);
					  return;
				  }
			  }];
		 } else if ( error ) {
			 [identificationResult setValue:error.localizedDescription forKey:@"errorMessage"];
			 errorCallback(@[identificationResult]);
			 return;
		 }
	 }];
}

- (NSString *)getResultCode: (BOOL)success canceledByUser:(BOOL)canceledByUser {
	if ( success ) {
		return @"SUCCESS";
	}
	if ( canceledByUser) {
		return @"CANCEL";
	}
	return @"FAILED";
}

@end
