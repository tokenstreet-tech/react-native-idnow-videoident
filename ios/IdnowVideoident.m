//
//  IdnowVideoident.m
//  IdnowVideoident
//
//  Created by Daniel Reichhart on 02.05.21.
//  Copyright © 2021 tokenstreet. All rights reserved.
//

#import "IdnowVideoident.h"
#import "IdnowVideoidentController.h"

@implementation IdnowVideoident {
    IdnowVideoidentController* idnowVideoidentController;
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(start:(NSDictionary *)options callback:(RCTResponseSenderBlock)callback) {
    idnowVideoidentController = [[IdnowVideoidentController alloc] init:options];
    [idnowVideoidentController start:callback];
}

@end
