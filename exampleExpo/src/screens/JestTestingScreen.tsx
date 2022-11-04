import { EStyleSheet } from '@tokenstreet/react-native-extended-stylesheet';
import React, { useMemo } from 'react';
import { Platform, Text, View } from 'react-native';

EStyleSheet.build({
    $fontColor: '#F5FCFF',
});

export const JestTestingScreen: React.FC = () => {
    const instructions = useMemo(
        () =>
            Platform.select({
                ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
                android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
            }),
        []
    );

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text>
        </View>
    );
};

const styles = EStyleSheet.create({
    // <-- use EStyleSheet instead of StyleSheet
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$fontColor', // <-- EStyleSheet variable
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
