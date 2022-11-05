import { IdnowManager } from '@tokenstreet/react-native-idnow-videoident';
import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { createFullSettings } from './createFullSettings';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

export const App: React.FC = () => {
    const [transactionToken, setTransactionToken] = useState<string>('YOUR_TRANSACTION_TOKEN');
    const [videoIdentResponse, setVideoIdentResponse] = useState<string>('');
    const startVideoIdent = useCallback(() => {
        setVideoIdentResponse('');
        IdnowManager.startVideoIdent(createFullSettings(transactionToken))
            .then((fulfilled) => setVideoIdentResponse(`Resolved:\n${JSON.stringify(fulfilled)}`))
            .catch((rejected) => setVideoIdentResponse(`Rejected:\n${JSON.stringify(rejected)}`));
    }, [transactionToken]);

    return (
        <View style={styles.container}>
            <TextInput onChangeText={setTransactionToken} placeholder="Transaction token" value={transactionToken} />
            <Button onPress={startVideoIdent} title="Start video ident" />
            <Text>{videoIdentResponse}</Text>
        </View>
    );
};
