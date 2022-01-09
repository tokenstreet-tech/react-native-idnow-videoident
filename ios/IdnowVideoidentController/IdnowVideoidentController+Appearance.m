//
//  IdnowVideoidentController+Appearance.m
//  IdnowVideoident
//
//  Created by Daniel Reichhart on 09.01.22.
//  Copyright © 2021 tokenstreet. All rights reserved.
//

#import "IdnowVideoidentController+Appearance.h"

@implementation IdnowVideoidentController (Appearance)
- (void)setAppearance:(NSDictionary *)options {
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
}
@end
