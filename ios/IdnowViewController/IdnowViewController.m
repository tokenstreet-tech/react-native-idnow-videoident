//
//  IdnowViewController.m
//  ReactNativeIdnowVideoident
//
//  Created by Daniel Reichhart on 09.01.22.
//  Copyright © 2022 tokenstreet. All rights reserved.
//

#import "IdnowViewController.h"

@implementation IdnowViewController

-(instancetype)initWithOptions:(NSDictionary *)options {
	self = [super init];

	// Setup IDnowAppearance
	IDnowAppearance *appearance = [IDnowAppearance sharedAppearance];
	NSDictionary *appearanceSettings = options[@"appearance"];
	NSDictionary *colorsSettings = options[@"colors"];

	// -----------------------------------------------------------------------------------
    //									Colors
    // -----------------------------------------------------------------------------------
	appearance.textFieldCornerRadius = [RCTConvert NSNumber:appearanceSettings[@"textFieldCornerRadius"];

	// -----------------------------------------------------------------------------------
    //                                    Call Quality Check
    // -----------------------------------------------------------------------------------
	appearance.useTitleSeparator = appearanceSettings[@"useTitleSeparator"];
 	// appearance.titleBackgroundImage = [RCTConvert any:appearanceSettings[@"titleBackgroundImage"]];
	// appearance.titleBackgroundImageOffset = [RCTConvert any:appearanceSettings[@"titleBackgroundImageOffset"]];
	appearance.resultButtonsAsUIButtonsBelow = appearanceSettings[@"resultButtonsAsUIButtonsBelow"];
	appearance.useResultIcon = appearanceSettings[@"useResultIcon"];

	// -----------------------------------------------------------------------------------
    //									Table View
    // -----------------------------------------------------------------------------------
	// appearance.checkBoxPosition = [RCTConvert any:appearanceSettings[@"checkBoxPosition"]];
	appearance.shouldShowGTCInline = appearanceSettings[@"shouldShowGTCInline"];
	// appearance.numberLabelPosition = [RCTConvert any:appearanceSettings[@"numberLabelPosition"]];
	appearance.seperatorLineComplete = appearanceSettings[@"seperatorLineComplete"];
	appearance.markMandatoryCells = appearanceSettings[@"markMandatoryCells"];
	appearance.underlineButtonTitles = appearanceSettings[@"underlineButtonTitles"];
	appearance.boldButtonTitles = appearanceSettings[@"boldButtonTitles"];
	appearance.boldTitles = appearanceSettings[@"boldTitles"];
	// appearance.requestCodeAgainLayoutType = [RCTConvert any:appearanceSettings[@"requestCodeAgainLayoutType"]];
	appearance.checkBoxesSquared = appearanceSettings[@"checkBoxesSquared"];
	appearance.inputFieldsSquared = appearanceSettings[@"inputFieldsSquared"];
	appearance.identCodeLayoutHalf = appearanceSettings[@"identCodeLayoutHalf"];
	appearance.usedNewBrand = appearanceSettings[@"usedNewBrand"];
	// appearance.customBackButtonItem = [RCTConvert any:customBackButtonItem[@"usedNewBrand"]];
	// appearance.customCancelButton = [RCTConvert any:customBackButtonItem[@"customCancelButton"]];
	// appearance.customAgentView = [RCTConvert any:customBackButtonItem[@"customAgentView"]];
	// appearance.customActivityIndicatorURL = [RCTConvert any:customBackButtonItem[@"customActivityIndicatorURL"]];

	// -----------------------------------------------------------------------------------
    //									Status Bar
    // -----------------------------------------------------------------------------------
	appearance.enableStatusBarStyleLightContent = appearanceSettings[@"enableStatusBarStyleLightContent"]];

	// -----------------------------------------------------------------------------------
    //									Font Names
    // -----------------------------------------------------------------------------------
	appearance.fontNameBold = appearanceSettings[@"fontNameBold"];
	appearance.fontNameRegular = appearanceSettings[@"fontNameRegular"];
	appearance.fontNameMedium = appearanceSettings[@"fontNameMedium"];
	appearance.fontNameLight = appearanceSettings[@"fontNameLight"];

	// -----------------------------------------------------------------------------------
    //                                    Video Ident
    // -----------------------------------------------------------------------------------
	appearance.shouldShowBlurOverlayLayer = appearanceSettings[@"shouldShowBlurOverlayLayer"];
	appearance.alphaBlurViewValue = [RCTConvert NSNumber:appearanceSettings[@"alphaBlurViewValue"]];
	appearance.lightBlurForIdentCodeContainer = appearanceSettings[@"lightBlurForIdentCodeContainer"];

	// -----------------------------------------------------------------------------------
    //                                    Call Quality Check
    // -----------------------------------------------------------------------------------
	appearance.shouldShowNavigationBarOnCQCScreen = appearanceSettings[@"shouldShowNavigationBarOnCQCScreen"];
	appearance.shouldUseHeadlineColorForPreCheckTitle = appearanceSettings[@"shouldUseHeadlineColorForPreCheckTitle"];
	appearance.progressBarsSquared = appearanceSettings[@"progressBarsSquared"];
	appearance.shouldShowResultTitleForCQCResult = appearanceSettings[@"shouldShowResultTitleForCQCResult"];
	appearance.shouldShowNetworkIndicatorForCQCResult = appearanceSettings[@"shouldShowNetworkIndicatorForCQCResult"];
	appearance.recheckButtonsBordered = appearanceSettings[@"recheckButtonsBordered"];
	appearance.shouldSeparateFooter = appearanceSettings[@"shouldSeparateFooter"];
	appearance.suggestionListBulleted = appearanceSettings[@"suggestionListBulleted"];

	// -----------------------------------------------------------------------------------
    //									Colors
    // -----------------------------------------------------------------------------------
	appearance.defaultTextColor = [RCTConvert UIColor:colorsSettings[@"defaultTextColor"]];
	appearance.primaryBrandColor = [RCTConvert UIColor:colorsSettings[@"primaryBrandColor"]];
	appearance.headlineColor = [RCTConvert UIColor:colorsSettings[@"headlineColor"]];
	appearance.linkColor = [RCTConvert UIColor:colorsSettings[@"linkColor"]];
	appearance.checkIconColor = [RCTConvert UIColor:colorsSettings[@"checkIconColor"]];
	appearance.proceedButtonBackgroundColor = [RCTConvert UIColor:colorsSettings[@"proceedButtonBackgroundColor"]];
	appearance.proceedButtonTextColor = [RCTConvert UIColor:colorsSettings[@"proceedButtonTextColor"]];
	appearance.photoIdentRetakeButtonBackgroundColor = [RCTConvert UIColor:colorsSettings[@"photoIdentRetakeButtonBackgroundColor"]];
	appearance.photoIdentRetakeButtonTextColor = [RCTConvert UIColor:colorsSettings[@"photoIdentRetakeButtonTextColor"]];
	appearance.checkContractFooterButtonBackgroundColor = [RCTConvert UIColor:colorsSettings[@"checkContractFooterButtonBackgroundColor"]];
	appearance.checkContractFooterButtonTextColor = [RCTConvert UIColor:colorsSettings[@"checkContractFooterButtonTextColor"]];
	appearance.textFieldColor = [RCTConvert UIColor:colorsSettings[@"textFieldColor"]];
	appearance.textFieldBorderColor = [RCTConvert UIColor:colorsSettings[@"textFieldBorderColor"]];
	appearance.failureColor = [RCTConvert UIColor:colorsSettings[@"failureColor"]];
	appearance.successColor = [RCTConvert UIColor:colorsSettings[@"successColor"]];
	appearance.titleBackgroundColor = [RCTConvert UIColor:colorsSettings[@"titleBackgroundColor"]];
	appearance.resultScreenHeaderLabelColor = [RCTConvert UIColor:colorsSettings[@"resultScreenHeaderLabelColor"]];
	appearance.backgroundColor = [RCTConvert UIColor:colorsSettings[@"backgroundColor"]];
	appearance.cqcOuterRingColor = [RCTConvert UIColor:colorsSettings[@"cqcOuterRingColor"]];
	appearance.cqcDefaultInnerRingColor = [RCTConvert UIColor:colorsSettings[@"cqcDefaultInnerRingColor"]];
	appearance.cqcPoorQualityInnerColor = [RCTConvert UIColor:colorsSettings[@"cqcPoorQualityInnerColor"]];
	appearance.cqcModerateQualityInnerColor = [RCTConvert UIColor:colorsSettings[@"cqcModerateQualityInnerColor"]];
	appearance.cqcExcellentQualityInnerColor = [RCTConvert UIColor:colorsSettings[@"cqcExcellentQualityInnerColor"]];

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

- (void) startVideoIdent:(RCTResponseSenderBlock)errorCallback successCallback:(RCTResponseSenderBlock)successCallback {
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

- (NSString *) getResultCode:(BOOL)success canceledByUser:(BOOL)canceledByUser {
	if ( success ) {
		return @"SUCCESS";
	}
	if ( canceledByUser) {
		return @"CANCEL";
	}
	return @"FAILED";
}

@end
