import { IDnowManager } from '@tokenstreet/react-native-idnow-videoident';
import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [transactionToken, setTransactionToken] = useState<string>('TST-DJEBR');
    const [videoIdentResponse, setVideoIdentResponse] = useState<string>('');
    const startVideoIdent = useCallback(async () => {
        setVideoIdentResponse('');
        IDnowManager.startVideoIdent({ transactionToken })
            .then((fulfilled) => setVideoIdentResponse(JSON.stringify(fulfilled)))
            .catch((rejected) => setVideoIdentResponse(JSON.stringify(rejected)));
    }, [transactionToken]);

    return (
        <View style={styles.container}>
            <TextInput placeholder={'Transaction token'} value={transactionToken} onChangeText={setTransactionToken} />
            <Button title={'Start video ident'} onPress={startVideoIdent} />
            <Text>{videoIdentResponse}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
