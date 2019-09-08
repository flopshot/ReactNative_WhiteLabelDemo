import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import appStyle from './AppTheme'
import whiteLabelConfig from './whitelabel/WhiteLabelConfig';

const app = () => (

  <SafeAreaView style={appStyle.screen}>
    <Text style={appStyle.title}>
      {whiteLabelConfig.APP_NAME} App
    </Text>
    <View style={appStyle.container}>
      <View style={appStyle.greeting}>
        <Text style={appStyle.greetingText}>{whiteLabelConfig.GREETING_TEXT}</Text>
      </View>
    </View>
  </SafeAreaView>
);

export default app;
