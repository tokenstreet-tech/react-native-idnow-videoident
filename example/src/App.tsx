import { IDnowManager } from '@tokenstreet/react-native-idnow-videoident';
import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
    const [transactionToken, setTransactionToken] = useState<string>('');
    const startVideoIdent = useCallback(() => IDnowManager.startVideoIdent({ transactionToken }), [transactionToken]);

    return (
        <View style={styles.container}>
            <TextInput placeholder={'Transaction token'} value={transactionToken} onChangeText={setTransactionToken} />
            <Button title={'Start video ident'} onPress={startVideoIdent} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 60,
        height: 60,
        marginVertical: 20,
    },
});
