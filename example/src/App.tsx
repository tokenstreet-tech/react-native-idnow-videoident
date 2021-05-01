import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import IdnowVideoident from 'react-native-idnow-videoident';

export default function App() {
    const [result, setResult] = useState<number | undefined>();
    const onPress = () => IdnowVideoident.start(3, 7).then(setResult);

    return (
        <View style={styles.container}>
            <Text>Result: {JSON.stringify(result)}</Text>
            <Button title="Start" onPress={onPress} />
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
