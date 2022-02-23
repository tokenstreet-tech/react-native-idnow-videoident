//
//  IdnowViewController.h
//  ReactNativeIdnowVideoident
//
//  Created by Daniel Reichhart on 09.01.22.
//  Copyright © 2022 tokenstreet GmbH. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <IDnowSDK/IDnowSDK.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTConvert.h>

NS_ASSUME_NONNULL_BEGIN

@interface IdnowViewController: UIViewController
@property (strong, nonatomic) IDnowController *idnowController;

- (void)startVideoIdent: (RCTResponseSenderBlock)errorCallback successCallback:(RCTResponseSenderBlock)successCallback;
- (NSString *)getResultCode: (BOOL)success canceledByUser:(BOOL)canceledByUser;

@end

NS_ASSUME_NONNULL_END
