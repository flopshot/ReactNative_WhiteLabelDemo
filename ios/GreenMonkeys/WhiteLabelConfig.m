// WhiteLabelConfig.m for green monkeys

#import "WhiteLabelConfig.h"

@implementation WhiteLabelConfig
  
  RCT_EXPORT_MODULE(WhiteLabelConfig);
  
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getAppName) {
    return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"];
  }
  
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getPrimaryColor) {
    return @"#008000";
  }
  
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getPrimaryTextColor) {
    return @"#FFD700";
  }
  
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getGreetingText) {
    return @"Legends of the Hidden Temple Rocks!!!!!!";
  }
  
@end
