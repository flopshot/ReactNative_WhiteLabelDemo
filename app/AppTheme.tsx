// AppTheme.tsx

import { StyleSheet } from 'react-native';
import whiteLabelConfig from './whitelabel/WhiteLabelConfig';

export default StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: whiteLabelConfig.PRIMARY_COLOR
    },
    title: {
        paddingHorizontal: 16,
        color: '#657b83',
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    greeting: {
        height: 100,
        width: 200,
        borderWidth: 1,
        borderColor: '#657b83',
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    greetingText: {
        color: whiteLabelConfig.PRIMARY_TEXT_COLOR
    }
});
