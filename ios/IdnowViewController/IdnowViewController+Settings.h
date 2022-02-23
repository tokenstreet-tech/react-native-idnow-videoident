//
//  IdnowViewController+Settings.h
//  ReactNativeIdnowVideoident
//
//  Created by Daniel Reichhart on 23.02.22.
//  Copyright © 2022 tokenstreet GmbH. All rights reserved.
//

#import "IdnowViewController.h"

NS_ASSUME_NONNULL_BEGIN

@interface IdnowViewController (Settings)

-(instancetype)initializeWithSettings:(NSDictionary *)settings;
-(void)applyAppearance:(NSDictionary *)settings;

-(UIModalPresentationStyle)getModalPresentationStyle:(NSString *)modalPresentationStyle;
-(IDnowEnvironment)getEnvironment:(NSString *)environment;
-(IDnowConnectionType)getConnectionType:(NSString *)connectionType;

-(APPEARANCE_MODE)getMode:(NSString *)mode;
-(CHECKBOX_POSITION)getCheckBoxPosition:(NSString *)checkBoxPosition;
-(NUMBER_LABEL_POSITION)getNumberLabelPosition:(NSString *)numberLabelPosition;
-(REQUEST_CODE_AGAIN_LAYOUT_TYPE)getRequestCodeAgainLayoutType:(NSString *)requestCodeAgainLayoutType;

@end

NS_ASSUME_NONNULL_END
