//
//  IdnowVideoidentController.m
//  IdnowVideoident
//
//  Created by Daniel Reichhart on 02.05.21.
//  Copyright © 2021 tokenstreet. All rights reserved.
//

#import "IdnowVideoidentController.h"
#import <IDnowSDK/IDnowSDK.h>
#import <React/RCTBridgeModule.h>

@interface IdnowVideoidentController ()
@property (strong, nonatomic) IDnowController *idnowController;
@end

@implementation IdnowVideoidentController
- (id)init:(NSDictionary *)options {
    self = [super init];

    // Setup IDnowAppearance
    IDnowAppearance *appearance = [IDnowAppearance sharedAppearance];

    // Adjust colors
    appearance.defaultTextColor = [UIColor blackColor];
    appearance.primaryBrandColor = [UIColor blueColor];
    appearance.proceedButtonBackgroundColor = [UIColor orangeColor];
    appearance.failureColor = [UIColor redColor];
    appearance.successColor = [UIColor greenColor];

    // Adjust statusbar
    appearance.enableStatusBarStyleLightContent = YES;

    // Adjust fonts
    appearance.fontNameRegular = @"AmericanTypewriter";
    appearance.fontNameLight = @"AmericanTypewriter-Light";
    appearance.fontNameMedium = @"AmericanTypewriter-CondensedBold";

    // To adjust navigation bar / bar button items etc. you should follow Apples UIAppearance protocol.

    // Setup IDnowSettings
    IDnowSettings *settings = [IDnowSettings settingsWithCompanyID:@"yourCompanyIdentifier"];
    settings.transactionToken = @"DEV-TXTXT";

    // Initialise and start identification
    self.idnowController = [[IDnowController alloc] initWithSettings: settings];

    return self;
}

- (IBAction)start:(RCTResponseSenderBlock)callback {
    UIViewController *rootViewController = [[[UIApplication sharedApplication] delegate] window].rootViewController;

    // Initialize identification using blocks
    // (alternatively you can set the delegate and implement the IDnowControllerDelegate protocol)
    [self.idnowController initializeWithCompletionBlock: ^(BOOL success, NSError *error, BOOL canceledByUser) {
        if ( success ) {
            // Start identification using blocks
            [self.idnowController startIdentificationFromViewController: rootViewController withCompletionBlock: ^(BOOL success, NSError *error, BOOL canceledByUser) {
                if ( success ) {
                    // identification was successfull
                } else {
                    // identification failed / canceled
                }
            }];
        } else if ( error ) {
            // Present an alert containing localized error description
            UIAlertController *alertController = [UIAlertController alertControllerWithTitle: @"Error" message: error.localizedDescription preferredStyle: UIAlertControllerStyleAlert];
            UIAlertAction *action = [UIAlertAction actionWithTitle: @"Ok" style: UIAlertActionStyleCancel handler: nil];
            [alertController addAction: action];
            [self presentViewController: alertController animated: true completion: nil];
        }
    }];
}
@end
