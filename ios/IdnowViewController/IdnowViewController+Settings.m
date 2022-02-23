//
//  IdnowViewController+Settings.m
//  ReactNativeIdnowVideoident
//
//  Created by Daniel Reichhart on 23.02.22.
//  Copyright © 2022 tokenstreet GmbH. All rights reserved.
//

#import "IdnowViewController+Settings.h"

@implementation IdnowViewController (Settings)

-(instancetype)initializeWithSettings:(NSDictionary *)settings {
	IDnowSettings *idnowSettings = [IDnowSettings new];

	// -----------------------------------------------------------------------------------
	//									Basic Properties
	// -----------------------------------------------------------------------------------
	idnowSettings.transactionToken = settings[@"transactionToken"];
	idnowSettings.companyID = settings[@"companyId"];

	// -----------------------------------------------------------------------------------
	//									Extended Properties (optional)
	// -----------------------------------------------------------------------------------
	idnowSettings.showIdentTokenOnCheckScreen = settings[@"showIdentTokenOnCheckScreen"];
	idnowSettings.showErrorSuccessScreen = settings[@"showErrorSuccessScreen"];
	idnowSettings.showVideoOverviewCheck = settings[@"showVideoOverviewCheck"];
	idnowSettings.forceModalPresentation = settings[@"forceModalPresentation"];
	idnowSettings.forceErrorSuccessScreen = settings[@"forceErrorSuccessScreen"];
	idnowSettings.modalPresentationStyle = [self getModalPresentationStyle:settings[@"modalPresentationStyle"]];
	// Deprecated: Supported by the SDK version 3.22.1 or before
	// idnowSettings.certificateProvider = settings[@"certificateProvider"];
	idnowSettings.pushDeviceToken = settings[@"pushDeviceToken"];
	idnowSettings.sentryDSN = settings[@"sentryDSN"];
	idnowSettings.productName = settings[@"productName"];
	idnowSettings.ignoreCompanyID = settings[@"ignoreCompanyID"];
	// Not implemented
	// idnowSettings.externalLogger = settings[@"externalLogger"];

	// -----------------------------------------------------------------------------------
	//                                    Localization
	// -----------------------------------------------------------------------------------
	idnowSettings.userInterfaceLanguage = settings[@"userInterfaceLanguage"];

	// -----------------------------------------------------------------------------------
	//									Server Properties (optional)
	// -----------------------------------------------------------------------------------
	idnowSettings.environment = settings[@"environment"];
	// idnowSettings.connectionType = settings[@"connectionType"];

	idnowSettings.allowInvalidCertificates = settings[@"allowInvalidCertificates"];
	idnowSettings.apiHost = settings[@"apiHost"];
	idnowSettings.websocketHost = settings[@"websocketHost"];
	idnowSettings.videoHost = settings[@"videoHost"];
	idnowSettings.stunHost = settings[@"stunHost"];
	idnowSettings.stunPort = [RCTConvert NSInteger:settings[@"stunPort"]];

	[self applyAppearance:settings];

	self.idnowController = [[IDnowController alloc] initWithSettings: idnowSettings];

	return self;
}

-(void)applyAppearance:(NSDictionary *)settings {
	IDnowAppearance *idnowAppearance = [IDnowAppearance sharedAppearance];
	NSDictionary *appearance = settings[@"appearance"];
	NSDictionary *colors = appearance[@"colors"];

	// -----------------------------------------------------------------------------------
	//									Appearance
	// -----------------------------------------------------------------------------------
	idnowAppearance.textFieldCornerRadius = appearance[@"textFieldCornerRadius"];

	// -----------------------------------------------------------------------------------
	//                                    Call Quality Check
	// -----------------------------------------------------------------------------------
	idnowAppearance.useTitleSeparator = appearance[@"useTitleSeparator"];
	idnowAppearance.titleBackgroundImage = [RCTConvert UIImage:appearance[@"titleBackgroundImage"]];
	idnowAppearance.titleBackgroundImageOffset = [RCTConvert CGFloat:appearance[@"titleBackgroundImageOffset"]];
	idnowAppearance.resultButtonsAsUIButtonsBelow = appearance[@"resultButtonsAsUIButtonsBelow"];
	idnowAppearance.useResultIcon = appearance[@"useResultIcon"];

	// -----------------------------------------------------------------------------------
	//									Table View
	// -----------------------------------------------------------------------------------
	// idnowAppearance.checkBoxPosition = [RCTConvert any:appearance[@"checkBoxPosition"]];
	idnowAppearance.shouldShowGTCInline = appearance[@"shouldShowGTCInline"];
	// idnowAppearance.numberLabelPosition = [RCTConvert any:appearance[@"numberLabelPosition"]];
	idnowAppearance.seperatorLineComplete = appearance[@"seperatorLineComplete"];
	idnowAppearance.markMandatoryCells = appearance[@"markMandatoryCells"];
	idnowAppearance.underlineButtonTitles = appearance[@"underlineButtonTitles"];
	idnowAppearance.boldButtonTitles = appearance[@"boldButtonTitles"];
	idnowAppearance.boldTitles = appearance[@"boldTitles"];
	// idnowAppearance.requestCodeAgainLayoutType = [RCTConvert any:appearance[@"requestCodeAgainLayoutType"]];
	idnowAppearance.checkBoxesSquared = appearance[@"checkBoxesSquared"];
	idnowAppearance.inputFieldsSquared = appearance[@"inputFieldsSquared"];
	idnowAppearance.identCodeLayoutHalf = appearance[@"identCodeLayoutHalf"];
	idnowAppearance.usedNewBrand = appearance[@"usedNewBrand"];
	// Not implemented
	// idnowAppearance.customBackButtonItem = appearance[@"customBackButtonItem"];
	// Not implemented
	// idnowAppearance.customCancelButton = appearance[@"customCancelButton"];
	// Not implemented
	// idnowAppearance.customAgentView = appearance[@"customAgentView"];
	idnowAppearance.customActivityIndicatorURL = [RCTConvert NSURL:appearance[@"customActivityIndicatorURL"]];

	// -----------------------------------------------------------------------------------
	//									Status Bar
	// -----------------------------------------------------------------------------------
	idnowAppearance.enableStatusBarStyleLightContent = appearance[@"enableStatusBarStyleLightContent"];

	// -----------------------------------------------------------------------------------
	//									Font Names
	// -----------------------------------------------------------------------------------
	idnowAppearance.fontNameBold = appearance[@"fontNameBold"];
	idnowAppearance.fontNameRegular = appearance[@"fontNameRegular"];
	idnowAppearance.fontNameMedium = appearance[@"fontNameMedium"];
	idnowAppearance.fontNameLight = appearance[@"fontNameLight"];

	// -----------------------------------------------------------------------------------
	//                                    Video Ident
	// -----------------------------------------------------------------------------------
	idnowAppearance.shouldShowBlurOverlayLayer = appearance[@"shouldShowBlurOverlayLayer"];
	idnowAppearance.alphaBlurViewValue = [RCTConvert CGFloat:appearance[@"alphaBlurViewValue"]];
	idnowAppearance.lightBlurForIdentCodeContainer = appearance[@"lightBlurForIdentCodeContainer"];

	// -----------------------------------------------------------------------------------
	//                                    Call Quality Check
	// -----------------------------------------------------------------------------------
	idnowAppearance.shouldShowNavigationBarOnCQCScreen = appearance[@"shouldShowNavigationBarOnCQCScreen"];
	idnowAppearance.shouldUseHeadlineColorForPreCheckTitle = appearance[@"shouldUseHeadlineColorForPreCheckTitle"];
	idnowAppearance.progressBarsSquared = appearance[@"progressBarsSquared"];
	idnowAppearance.shouldShowResultTitleForCQCResult = appearance[@"shouldShowResultTitleForCQCResult"];
	idnowAppearance.shouldShowNetworkIndicatorForCQCResult = appearance[@"shouldShowNetworkIndicatorForCQCResult"];
	idnowAppearance.recheckButtonsBordered = appearance[@"recheckButtonsBordered"];
	idnowAppearance.shouldSeparateFooter = appearance[@"shouldSeparateFooter"];
	idnowAppearance.suggestionListBulleted = appearance[@"suggestionListBulleted"];

	// -----------------------------------------------------------------------------------
	//									Colors
	// -----------------------------------------------------------------------------------
	idnowAppearance.defaultTextColor = [RCTConvert UIColor:colors[@"defaultTextColor"]];
	idnowAppearance.primaryBrandColor = [RCTConvert UIColor:colors[@"primaryBrandColor"]];
	idnowAppearance.headlineColor = [RCTConvert UIColor:colors[@"headlineColor"]];
	idnowAppearance.linkColor = [RCTConvert UIColor:colors[@"linkColor"]];
	idnowAppearance.checkIconColor = [RCTConvert UIColor:colors[@"checkIconColor"]];
	idnowAppearance.proceedButtonBackgroundColor = [RCTConvert UIColor:colors[@"proceedButtonBackgroundColor"]];
	idnowAppearance.proceedButtonTextColor = [RCTConvert UIColor:colors[@"proceedButtonTextColor"]];
	idnowAppearance.photoIdentRetakeButtonBackgroundColor = [RCTConvert UIColor:colors[@"photoIdentRetakeButtonBackgroundColor"]];
	idnowAppearance.photoIdentRetakeButtonTextColor = [RCTConvert UIColor:colors[@"photoIdentRetakeButtonTextColor"]];
	idnowAppearance.checkContractFooterButtonBackgroundColor = [RCTConvert UIColor:colors[@"checkContractFooterButtonBackgroundColor"]];
	idnowAppearance.checkContractFooterButtonTextColor = [RCTConvert UIColor:colors[@"checkContractFooterButtonTextColor"]];
	idnowAppearance.textFieldColor = [RCTConvert UIColor:colors[@"textFieldColor"]];
	idnowAppearance.textFieldBorderColor = [RCTConvert UIColor:colors[@"textFieldBorderColor"]];
	idnowAppearance.failureColor = [RCTConvert UIColor:colors[@"failureColor"]];
	idnowAppearance.successColor = [RCTConvert UIColor:colors[@"successColor"]];
	idnowAppearance.titleBackgroundColor = [RCTConvert UIColor:colors[@"titleBackgroundColor"]];
	idnowAppearance.resultScreenHeaderLabelColor = [RCTConvert UIColor:colors[@"resultScreenHeaderLabelColor"]];
	idnowAppearance.backgroundColor = [RCTConvert UIColor:colors[@"backgroundColor"]];
	idnowAppearance.cqcOuterRingColor = [RCTConvert UIColor:colors[@"cqcOuterRingColor"]];
	idnowAppearance.cqcDefaultInnerRingColor = [RCTConvert UIColor:colors[@"cqcDefaultInnerRingColor"]];
	idnowAppearance.cqcPoorQualityInnerColor = [RCTConvert UIColor:colors[@"cqcPoorQualityInnerColor"]];
	idnowAppearance.cqcModerateQualityInnerColor = [RCTConvert UIColor:colors[@"cqcModerateQualityInnerColor"]];
	idnowAppearance.cqcExcellentQualityInnerColor = [RCTConvert UIColor:colors[@"cqcExcellentQualityInnerColor"]];
}

-(UIModalPresentationStyle)getModalPresentationStyle:(NSString *)modalPresentationStyle {
	NSDictionary *mapping = @{
		@"UIModalPresentationFullScreen" : @(UIModalPresentationFullScreen),
		@"UIModalPresentationPageSheet" : @(UIModalPresentationPageSheet),
		@"UIModalPresentationFormSheet" : @(UIModalPresentationFormSheet),
		@"UIModalPresentationCurrentContext" : @(UIModalPresentationCurrentContext),
		@"UIModalPresentationCustom" : @(UIModalPresentationCustom),
		@"UIModalPresentationOverFullScreen" : @(UIModalPresentationOverFullScreen),
		@"UIModalPresentationOverCurrentContext" : @(UIModalPresentationOverCurrentContext),
		@"UIModalPresentationPopover" : @(UIModalPresentationPopover),
		@"UIModalPresentationNone" : @(UIModalPresentationNone),
		@"UIModalPresentationAutomatic" : @(UIModalPresentationAutomatic),
	};

	UIModalPresentationStyle result = [RCTConvertEnumValue("UIModalPresentationStyle",mapping,nil,modalPresentationStyle) integerValue];

	return result;
}

-(IDnowEnvironment)getEnvironment:(NSString *)environment {
	NSDictionary *mapping = @{
		// -----------------------------------------------------------------------------------
		//                                    Dev
		// -----------------------------------------------------------------------------------
		@"DEV" : @(IDnowEnvironmentDev),
		@"DEV_0" : @(IDnowEnvironmentDev0),
		@"DEV_1" : @(IDnowEnvironmentDev1),
		@"DEV_2" : @(IDnowEnvironmentDev2),
		@"DEV_3" : @(IDnowEnvironmentDev3),
		@"DEV_4" : @(IDnowEnvironmentDev4),
		@"DEV_5" : @(IDnowEnvironmentDev5),

		// -----------------------------------------------------------------------------------
		//                                    Test
		// -----------------------------------------------------------------------------------
		@"TEST" : @(IDnowEnvironmentTest),
		@"TEST_1" : @(IDnowEnvironmentTest1),
		@"TEST_2" : @(IDnowEnvironmentTest2),
		@"TEST_3" : @(IDnowEnvironmentTest3),

		// -----------------------------------------------------------------------------------
		//                                    Staging
		// -----------------------------------------------------------------------------------
		@"STAGING_1" : nil,

		// -----------------------------------------------------------------------------------
		//                                    Live
		// -----------------------------------------------------------------------------------
		@"LIVE" : @(IDnowEnvironmentLive),

		// -----------------------------------------------------------------------------------
		//                                    Intrum
		// -----------------------------------------------------------------------------------
		@"INTRUM" : @(IDnowEnvironmentIntrum),
		@"INTRUM_TEST" : @(IDnowEnvironmentIntrumTest),

		// -----------------------------------------------------------------------------------
		//                                    Other
		// -----------------------------------------------------------------------------------
		@"CUSTOM" : @(IDnowEnvironmentCustom),
		@"INT" : nil,
		@"NOT_DEFINED" : @(IDnowEnvironmentNotDefined),
	};

	IDnowEnvironment result = [RCTConvertEnumValue("IDnowEnvironmentCustom",mapping,nil,environment) integerValue];

	return result;
}

@end
