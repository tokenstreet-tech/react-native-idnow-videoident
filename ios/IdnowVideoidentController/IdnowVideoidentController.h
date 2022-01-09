//
//  IdnowVideoidentController.h
//  IdnowVideoident
//
//  Created by Daniel Reichhart on 09.01.22.
//  Copyright © 2021 tokenstreet. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface IdnowVideoidentController : UIViewController
- (id)init:(NSDictionary *)options;
- (IBAction)start:RCTResponseSenderBlock;
@end

