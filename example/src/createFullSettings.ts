import type { ISettings } from '@tokenstreet/react-native-idnow-videoident';

import { getRandomColor } from './util';

export const createFullSettings = (transactionToken: string): ISettings => ({
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
