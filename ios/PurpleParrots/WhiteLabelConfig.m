// WhiteLabelConfig.m for purple parrots

#import "WhiteLabelConfig.h"

@implementation WhiteLabelConfig
  
  RCT_EXPORT_MODULE(WhiteLabelConfig);
  
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getAppName) {
    return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"];
  }
  
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getPrimaryColor) {
    return @"#800080";
  }
  
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getPrimaryTextColor) {
    return @"#FFD700";
  }
  
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getGreetingText) {
    return @"Legends of the Hidden Temple Rules!!!!!!";
  }
  
@end
