//
//  IdnowVideoidentController.h
//  IdnowVideoident
//
//  Created by Daniel Reichhart on 02.05.21.
//  Copyright © 2021 tokenstreet. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface IdnowVideoidentController : UIViewController
- (id)init:(NSDictionary *)options;
- (IBAction)start:RCTResponseSenderBlock;
@end

