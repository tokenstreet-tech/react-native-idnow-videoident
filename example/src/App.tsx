import type { ISettings } from '@tokenstreet/react-native-idnow-videoident';
import { IDnowManager } from '@tokenstreet/react-native-idnow-videoident';
import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { getRandomColor } from './util';

const createSettings = (transactionToken: string): ISettings => ({
    transactionToken,
    appearance: {
        colors: {
            defaultTextColor: getRandomColor(),
            primaryBrandColor: getRandomColor(),
            headlineColor: getRandomColor(),
            linkColor: getRandomColor(),
            checkIconColor: getRandomColor(),
            proceedButtonBackgroundColor: getRandomColor(),
            proceedButtonTextColor: getRandomColor(),
            photoIdentRetakeButtonBackgroundColor: getRandomColor(),
            photoIdentRetakeButtonTextColor: getRandomColor(),
            checkContractFooterButtonBackgroundColor: getRandomColor(),
            checkContractFooterButtonTextColor: getRandomColor(),
            textFieldColor: getRandomColor(),
            textFieldBorderColor: getRandomColor(),
            failureColor: getRandomColor(),
            successColor: getRandomColor(),
            titleBackgroundColor: getRandomColor(),
            resultScreenHeaderLabelColor: getRandomColor(),
            backgroundColor: getRandomColor(),
            cqcOuterRingColor: getRandomColor(),
            cqcDefaultInnerRingColor: getRandomColor(),
            cqcPoorQualityInnerColor: getRandomColor(),
            cqcModerateQualityInnerColor: getRandomColor(),
            cqcExcellentQualityInnerColor: getRandomColor(),
        },
    },
});

export const App: React.FC = () => {
    const [transactionToken, setTransactionToken] = useState<string>('TST-KJCXN');
    const [videoIdentResponse, setVideoIdentResponse] = useState<string>('');
    const startVideoIdent = useCallback(async () => {
        setVideoIdentResponse('');
        IDnowManager.startVideoIdent(createSettings(transactionToken))
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
