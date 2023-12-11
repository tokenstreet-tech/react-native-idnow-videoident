import type { ProcessedColorValue } from 'react-native';

import { ConnectionTypeEnum } from '../model/enums/ConnectionTypeEnum';
import type { IColors } from '../model/interfaces/IColors';
import type { ISettings } from '../model/interfaces/ISettings';
import { processSettings } from '../processSettings';

describe('processSettings', () => {
    describe('defaultSettings', () => {
        it('should apply the default settings', () => {
            // Arrange
            const transactionTokenMock = 'XXX-XXXXX';
            const settings: ISettings = { transactionToken: transactionTokenMock };

            // Act
            const result = processSettings(settings);

            // Assert
            const expectedResult: ISettings<ProcessedColorValue> = {
                allowHttpConnections: false,
                allowInvalidCertificates: false,
                appGoogleRating: false,
                appearance: {
                    colors: {},
                    newBranding: true,
                    titleBackgroundImage: undefined,
                },
                calledFromIDnowApp: false,
                connectionType: ConnectionTypeEnum.WEBSOCKET,
                ignoreCompanyID: true,
                transactionToken: transactionTokenMock,
            };
            expect(result).toStrictEqual(expectedResult);
        });
        it('should not override the given settings', () => {
            // Arrange
            const transactionTokenMock = 'XXX-XXXXX';
            const settings: ISettings = {
                allowHttpConnections: true,
                allowInvalidCertificates: true,
                appGoogleRating: true,
                appearance: {
                    newBranding: false,
                },
                calledFromIDnowApp: true,
                connectionType: ConnectionTypeEnum.LONG_POLLING,
                ignoreCompanyID: false,
                transactionToken: transactionTokenMock,
            };

            // Act
            const result = processSettings(settings);

            // Assert
            const expectedResult: ISettings<ProcessedColorValue> = {
                allowHttpConnections: true,
                allowInvalidCertificates: true,
                appGoogleRating: true,
                appearance: {
                    colors: {},
                    newBranding: false,
                    titleBackgroundImage: undefined,
                },
                calledFromIDnowApp: true,
                connectionType: ConnectionTypeEnum.LONG_POLLING,
                ignoreCompanyID: false,
                transactionToken: transactionTokenMock,
            };
            expect(result).toStrictEqual(expectedResult);
        });
    });
    describe('processColor', () => {
        it('should process the color values for iOS', () => {
            // Arrange
            const transactionTokenMock = 'XXX-XXXXX';
            const settings: ISettings = {
                appearance: {
                    colors: {
                        defaultTextColor: '#ffffff',
                        primaryBrandColor: 'blue',
                        proceedButtonBackgroundColor: 'rgb(255, 0, 255)',
                    },
                },
                transactionToken: transactionTokenMock,
            };

            // Act
            const result = processSettings(settings);

            // Assert
            const expectedResult: IColors<ProcessedColorValue> = {
                defaultTextColor: 4294967295,
                primaryBrandColor: 4278190335,
                proceedButtonBackgroundColor: 4294902015,
            };
            expect(result.appearance?.colors).toStrictEqual(expectedResult);
        });
        // it('should process the color values for Android', () => {
        //     // Arrange
        //     const transactionTokenMock = 'XXX-XXXXX';
        //     const settings: ISettings = {
        //         transactionToken: transactionTokenMock,
        //         appearance: {
        //             colors: {
        //                 primaryColor: '#ffffff',
        //                 primaryVariantColor: 'blue',
        //                 primaryTextColor: 'rgb(255, 0, 255)',
        //             },
        //         },
        //     };
        //
        //     // Act
        //     const result = processSettings(settings);
        //
        //     // Assert
        //     const expectedResult: IColors<ProcessedColorValue> = {
        //         primaryColor: 4294967295,
        //         primaryVariantColor: 4278190335,
        //         primaryTextColor: 4294902015,
        //     };
        //     expect(result.appearance?.colors).toEqual(expectedResult);
        // });
    });
});
