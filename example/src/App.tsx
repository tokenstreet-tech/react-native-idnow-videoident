import type { ISettings } from '@tokenstreet/react-native-idnow-videoident';
import { IDnowManager } from '@tokenstreet/react-native-idnow-videoident';
import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { EnvironmentEnum } from '../../src/model/enums/EnvironmentEnum';
import { getRandomColor } from './util';

const color = getRandomColor();
const createSettings = (transactionToken: string): ISettings => ({
    transactionToken,
    environment: EnvironmentEnum.STAGING_1,
    appearance: {
        colors: {
            defaultTextColor: color,
            primaryBrandColor: color,
            headlineColor: color,
            linkColor: color,
            checkIconColor: color,
            proceedButtonBackgroundColor: color,
            proceedButtonTextColor: color,
            photoIdentRetakeButtonBackgroundColor: color,
            photoIdentRetakeButtonTextColor: color,
            checkContractFooterButtonBackgroundColor: color,
            checkContractFooterButtonTextColor: color,
            textFieldColor: color,
            textFieldBorderColor: color,
            failureColor: color,
            successColor: color,
            titleBackgroundColor: color,
            resultScreenHeaderLabelColor: color,
            backgroundColor: color,
            cqcOuterRingColor: color,
            cqcDefaultInnerRingColor: color,
            cqcPoorQualityInnerColor: color,
            cqcModerateQualityInnerColor: color,
            cqcExcellentQualityInnerColor: color,
        },
    },
});

export const App: React.FC = () => {
    const [transactionToken, setTransactionToken] = useState<string>('TST-KJCXN');
    const [videoIdentResponse, setVideoIdentResponse] = useState<string>('');
    const startVideoIdent = useCallback(() => {
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
