import { EStyleSheet } from '@tokenstreet/react-native-extended-stylesheet';
import React from 'react';
import { Text, View } from 'react-native';

export const ThemingComponent: React.FC = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome to Extended StyleSheet!</Text>
    </View>
);

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$bgColor',
    },
    text: {
        color: '$textColor',
    },
});
