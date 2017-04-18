//
//  TestRNBridge.m
//  ReactIOSProj
//
//  Created by duanefaith on 2017/4/19.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "TestRNBridge.h"

@implementation TestRNBridge

RCT_EXPORT_MODULE(RNBridge);

RCT_EXPORT_METHOD(getBundleId:(RCTResponseSenderBlock)callback)
{
  if (callback)
  {
    callback(@[[NSNull null], [NSBundle mainBundle].bundleIdentifier]);
  }
}

RCT_EXPORT_METHOD(getAppVersion:(RCTResponseSenderBlock)callback)
{
  if (callback)
  {
    NSDictionary *mainBundInfo = [[NSBundle mainBundle] infoDictionary];
    callback(@[[NSNull null], (NSString *)[mainBundInfo objectForKey:@"CFBundleShortVersionString"]]);
  }
}

@end
