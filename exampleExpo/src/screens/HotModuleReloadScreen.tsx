import { EStyleSheet } from '@tokenstreet/react-native-extended-stylesheet';
import React, { useCallback, useState } from 'react';
import { Button, Text, View } from 'react-native';

/*
 * 1. Run app
 * 2. Enable hot module reload
 * 3. Click a few times on "Click me" button to set component state
 * 4. Change $fontColor value below
 * 5. Watch that font color is changed and component state is saved
 */

EStyleSheet.build({
    $fontColor: 'black', // Change this to another color
});

export const HotModuleReloadScreen: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const increaseCount = useCallback(() => setCount((prevCount) => prevCount + 1), []);
    return (
        <View style={styles.column}>
            <Text style={styles.header}>You clicked: {count}</Text>
            <Button onPress={increaseCount} title="Click me!" />
        </View>
    );
};

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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
module.hot.accept(() => {
    EStyleSheet.clearCache();
    EStyleSheet.build();
});
