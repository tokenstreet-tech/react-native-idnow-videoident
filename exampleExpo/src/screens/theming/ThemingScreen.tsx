import { EStyleSheet } from '@tokenstreet/react-native-extended-stylesheet';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, View } from 'react-native';

import { ThemingComponent } from './ThemingComponent';

const lightTheme = {
    $theme: 'light',
    $textColor: 'black',
    $bgColor: 'white',
};

const darkTheme = {
    $theme: 'dark',
    $textColor: 'white',
    $bgColor: 'black',
};

EStyleSheet.build(lightTheme);

export const ThemingScreen: React.FC = () => {
    const [shouldRender, setShouldRender] = useState<boolean>(true);

    const toggleTheme = useCallback(() => {
        const theme = EStyleSheet.value('$theme') === 'light' ? darkTheme : lightTheme;
        EStyleSheet.build(theme);
        setShouldRender(false);
    }, []);

    useEffect(() => {
        // Function setState() should be called twice to re-render whole component tree
        if (!shouldRender) {
            setShouldRender(true);
        }
    }, [shouldRender]);

    if (shouldRender) {
        const buttonTitle = EStyleSheet.value('$theme') === 'light' ? 'Set dark theme' : 'Set light theme';
        return (
            <View style={styles.container}>
                <ThemingComponent />
                <Button title={buttonTitle} onPress={toggleTheme} />
            </View>
        );
    }
    return null; // Returning null is important to re-render component tree
};

const styles = EStyleSheet.create({
    container: {
        flex: 1,
    },
});
