import { NativeModules } from 'react-native';

export default class WhiteLabelConfig {
    public static readonly APP_NAME: string = 'WhiteLabel';// NativeModules.WhiteLabelConfig.appName();
    public static readonly PRIMARY_COLOR: string = '#fdf6e3';// NativeModules.WhiteLabelConfig.primaryColor();
    public static readonly PRIMARY_TEXT_COLOR: string = '#657b83';// NativeModules.WhiteLabelConfig.primaryTextColor();
    public static readonly GREETING_TEXT: string = 'Welcome';// NativeModules.WhiteLabelConfig.greetingText();
}
