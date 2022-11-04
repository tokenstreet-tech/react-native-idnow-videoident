import { EStyleSheet } from '@tokenstreet/react-native-extended-stylesheet';
import React from 'react';
import { Dimensions, Text } from 'react-native';

// Define REM depending on screen width
const { width } = Dimensions.get('window');
const rem = width > 340 ? 18 : 17;

// Calc styles
EStyleSheet.build({
    $rem: rem,
});

export const RemScreen: React.FC = () => <Text style={styles.text}>Font size 1.5rem</Text>;

const styles = EStyleSheet.create({
    text: {
        padding: '0.5rem',
        fontSize: '1.5rem',
        marginTop: 20,
    },
});
