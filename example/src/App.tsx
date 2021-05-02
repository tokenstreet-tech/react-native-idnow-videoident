import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { start } from 'react-native-idnow-videoident';

export default function App() {
    const [result, setResult] = useState<boolean | undefined>(undefined);
    const [callback, setCallback] = useState<
        { canceledByUser: boolean; message: string; success: boolean } | undefined
    >(undefined);
    const onPress = () =>
        start({ transactionToken: 'DEV-TXTXT', companyID: 'yourCompanyIdentifier' }, setCallback).then(setResult);

    return (
        <View style={styles.container}>
            <Button title="init" onPress={onPress} />
            <Text>result: {JSON.stringify(result)}</Text>
            <Text>canceledByUser: {callback?.canceledByUser}</Text>
            <Text>message: {callback?.message}</Text>
            <Text>success: {callback?.success}</Text>
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
