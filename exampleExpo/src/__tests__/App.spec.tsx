import React from 'react';
import renderer from 'react-test-renderer';

import { JestTestingScreen } from '../screens/JestTestingScreen';

it('should render correctly', () => {
    // Arrange

    // Act
    const tree = renderer.create(<JestTestingScreen />).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
});

/*
 * // Instead of creating __mocks__ you can build style for particular test in beforeAll hook:
 * import EStyleSheet from '@tokenstreet/react-native-extended-stylesheet';
 *
 * beforeAll(() => {
 *     EStyleSheet.build({
 *         $fontColor: '#F5FCFF',
 *     });
 * });
 */
