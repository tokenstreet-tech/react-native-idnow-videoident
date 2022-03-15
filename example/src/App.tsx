import { IDnowManager } from '@tokenstreet/react-native-idnow-videoident';
import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { createFullSettings } from './createFullSettings';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const App: React.FC = () => {
    const [transactionToken, setTransactionToken] = useState<string>('YOUR_TRANSACTION_TOKEN');
    const [videoIdentResponse, setVideoIdentResponse] = useState<string>('');
    const startVideoIdent = useCallback(() => {
        setVideoIdentResponse('');
        IDnowManager.startVideoIdent(createFullSettings(transactionToken))
            .then((fulfilled) => setVideoIdentResponse(`Resolved:\n${JSON.stringify(fulfilled)}`))
            .catch((rejected) => setVideoIdentResponse(`Rejected:\n${JSON.stringify(rejected)}`));
    }, [transactionToken]);

    return (
        <View style={styles.container}>
            <TextInput placeholder={'Transaction token'} value={transactionToken} onChangeText={setTransactionToken} />
            <Button title={'Start video ident'} onPress={startVideoIdent} />
            <Text>{videoIdentResponse}</Text>
        </View>
    );
};
