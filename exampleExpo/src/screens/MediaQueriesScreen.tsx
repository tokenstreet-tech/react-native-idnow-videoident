import { EStyleSheet } from '@tokenstreet/react-native-extended-stylesheet';
import React from 'react';
import { Text, View } from 'react-native';

// Calc styles
EStyleSheet.build({
    '@media ios': {
        // Media queries for global variables
        $fontSize: 12,
    },
    '@media android': {
        $fontSize: 16,
    },
});

export const MediaQueriesScreen: React.FC = () => (
    <View style={styles.column}>
        <Text>
            Column width depends on device width: {'\n'}- 70% for {'<'}350{'\n'}- 80% for 350-500{'\n'}- 90% for {'>'}
            500
        </Text>
        <Text style={styles.text}>Text size/color depends on platform.</Text>
    </View>
);

const styles = EStyleSheet.create({
    column: {
        alignSelf: 'center',
        borderWidth: 1,
        marginTop: '10%',
        padding: 5,
    },
    '@media (max-width: 350)': {
        // Media query on sheet level
        column: {
            width: '70%',
        },
    },
    '@media (min-width: 350) and (max-width: 500)': {
        column: {
            width: '80%',
        },
    },
    '@media (min-width: 500)': {
        column: {
            width: '90%',
        },
    },
    text: {
        fontSize: '$fontSize',
        '@media ios': {
            // Media query on style level
            color: 'green',
        },
        '@media android': {
            color: 'blue',
        },
    },
});
