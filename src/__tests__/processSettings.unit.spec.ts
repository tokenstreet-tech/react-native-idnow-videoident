import type { ISettings } from '@tokenstreet/react-native-idnow-videoident';
import type { ProcessedColorValue } from 'react-native';

import { processSettings } from '../processSettings';

describe('processSettings', () => {
    it('should process the color values', () => {
        // Arrange
        const transactionTokenMock = 'TST-XXXXX';
        const settings: ISettings = {
            transactionToken: transactionTokenMock,
            colors: {
                defaultTextColor: '#ffffff',
                primaryBrandColor: 'blue',
                proceedButtonBackgroundColor: 'rgb(255, 0, 255)',
            },
        };

        // Act
        const result = processSettings(settings);

        // Assert
        const expectedResult: ISettings<ProcessedColorValue> = {
            transactionToken: transactionTokenMock,
            colors: {
                defaultTextColor: 4294967295,
                primaryBrandColor: 4278190335,
                proceedButtonBackgroundColor: 4294902015,
            },
        };
        expect(result).toEqual(expectedResult);
    });
});
