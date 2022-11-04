import { EStyleSheet } from '@tokenstreet/react-native-extended-stylesheet';
import React from 'react';
import { Text, View } from 'react-native';

// Calc styles
EStyleSheet.build({
    $fontColor: 'black',
});

export const SimpleScreen: React.FC = () => (
    <View style={styles.column}>
        <Text style={styles.header}>Welcome to Extended StyleSheet!</Text>
    </View>
);

const styles = EStyleSheet.create({
    column: {
        width: '80%',
        marginHorizontal: '10%',
        marginTop: '10%',
        backgroundColor: '#e6e6e6',
        alignItems: 'center',
        padding: '0.5rem',
    },
    header: {
        fontSize: '1rem',
        color: '$fontColor',
    },
});
