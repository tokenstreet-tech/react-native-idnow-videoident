//
//  IdnowViewController.m
//  ReactNativeIdnowVideoident
//
//  Created by Daniel Reichhart on 09.01.22.
//  Copyright © 2022 Facebook. All rights reserved.
//

#import "IdnowViewController.h"

@interface IdnowViewController ()

@end

@implementation IdnowViewController

-(instancetype)initWithOptions:(NSDictionary *)options
{
	self = [super init];

	// Setup IDnowAppearance
	IDnowAppearance *appearance = [IDnowAppearance sharedAppearance];
	NSDictionary *appearanceOptions = options[@"appearance"];

	// Adjust colors
	appearance.defaultTextColor = [RCTConvert UIColor:appearanceOptions[@"defaultTextColor"]];
	appearance.primaryBrandColor = [RCTConvert UIColor:appearanceOptions[@"primaryBrandColor"]];
	appearance.proceedButtonBackgroundColor = [RCTConvert UIColor:appearanceOptions[@"proceedButtonBackgroundColor"]];
	appearance.proceedButtonTextColor = [RCTConvert UIColor:appearanceOptions[@"proceedButtonTextColor"]];
	appearance.photoIdentRetakeButtonBackgroundColor = [RCTConvert UIColor:appearanceOptions[@"photoIdentRetakeButtonBackgroundColor"]];
	appearance.photoIdentRetakeButtonTextColor = [RCTConvert UIColor:appearanceOptions[@"photoIdentRetakeButtonTextColor"]];
	appearance.textFieldColor = [RCTConvert UIColor:appearanceOptions[@"textFieldColor"]];
	appearance.failureColor = [RCTConvert UIColor:appearanceOptions[@"failureColor"]];
	appearance.successColor = [RCTConvert UIColor:appearanceOptions[@"successColor"]];

	// Adjust statusbar
	appearance.enableStatusBarStyleLightContent = [RCTConvert BOOL:appearanceOptions[@"enableStatusBarStyleLightContent"]];

	// Adjust fonts
	appearance.fontNameRegular = appearanceOptions[@"fontNameRegular"];
	appearance.fontNameLight = appearanceOptions[@"fontNameLight"];
	appearance.fontNameMedium = appearanceOptions[@"fontNameMedium"];

	// Back button
	UIBarButtonItem *backButton = [[UIBarButtonItem alloc]init];
	appearance.customBackButtonItem = backButton;

	// Set up and customize settings
	self.settings = [IDnowSettings new];
	self.settings.transactionToken = options[@"transactionToken"];
	self.settings.companyID = options[@"companyId"];
	self.settings.showErrorSuccessScreen = false;
	self.settings.showVideoOverviewCheck = options[@"showVideoOverviewCheck"];
	self.settings.ignoreCompanyID = options[@"ignoreCompanyID"];
	self.settings.forceModalPresentation = options[@"forceModalPresentation"];
	self.settings.showIdentTokenOnCheckScreen = options[@"showIdentTokenOnCheckScreen"];

	self.idnowController = [[IDnowController alloc] initWithSettings: self.settings];

	return self;
}

- (void) startVideoIdent:(RCTResponseSenderBlock)callback
{
	UIViewController *rootViewController = [[[UIApplication sharedApplication] delegate] window].rootViewController;

	self.idnowController.delegate  = nil;
	__weak typeof(self) weakSelf   = self;

	// Initialize identification using blocks (alternatively you can set the delegate and implement the IDnowControllerDelegate protocol)
	[self.idnowController initializeWithCompletionBlock:^(BOOL success, NSError * _Nullable error, BOOL canceledByUser) {
	         NSMutableDictionary *identificationResult = [[NSMutableDictionary alloc] init];
	         [identificationResult setValue:@(success) forKey:@"success"];
	         [identificationResult setValue:@(canceledByUser) forKey:@"canceledByUser"];
	         if ( success ) {
			 [weakSelf.idnowController startIdentificationFromViewController:rootViewController withCompletionBlock:^(BOOL success, NSError * _Nullable error, BOOL canceledByUser)  {
			          [identificationResult setValue:@"Identification was successful" forKey:@"message"];
			          [identificationResult setValue:@(success) forKey:@"success"];
			          [identificationResult setValue:@(canceledByUser) forKey:@"canceledByUser"];

			          if ( success ) {
					  callback(@[[NSNull null], identificationResult]);
					  return;
				  } else {
					  [identificationResult setValue:error.localizedDescription forKey:@"message"];
					  callback(@[identificationResult]);
					  return;
				  }
			  }];
		 } else if ( error ) {
			 [identificationResult setValue:error.localizedDescription forKey:@"message"];
			 callback(@[identificationResult]);
			 return;
		 }
	 }];
}

@end
