import React from 'react';
import { SafeAreaView } from 'react-native';

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-expect-error Import remains to be able to switch between screens more easily
import { HotModuleReloadScreen } from './screens/HotModuleReloadScreen';
// @ts-expect-error Same description as above
import { JestTestingScreen } from './screens/JestTestingScreen';
// @ts-expect-error Same description as above
import { MediaQueriesScreen } from './screens/MediaQueriesScreen';
// @ts-expect-error Same description as above
import { ReadmeScreen } from './screens/ReadmeScreen';
// @ts-expect-error Same description as above
import { RemScreen } from './screens/RemScreen';
import { SimpleScreen } from './screens/SimpleScreen';
// @ts-expect-error Same description as above
import { ThemingScreen } from './screens/theming/ThemingScreen';
/* eslint-enable @typescript-eslint/no-unused-vars */

/**
 * The screens must be rendered individually,
 * because each screen calls EStyleSheet.build() with the respective global variables.
 * Otherwise, the screens would interfere with each other.
 * @constructor
 */
export const App: React.FC = () => (
    <SafeAreaView>
        {/* <HotModuleReloadScreen />*/}
        {/* <JestTestingScreen />*/}
        {/* <MediaQueriesScreen />*/}
        {/* <ReadmeScreen />*/}
        {/* <RemScreen />*/}
        <SimpleScreen />
        {/* <ThemingScreen />*/}
    </SafeAreaView>
);
