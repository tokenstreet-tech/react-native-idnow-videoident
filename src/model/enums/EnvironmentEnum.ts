/**
 * iOS Header file:
 * Possible server environments for executing an identification
 */
export enum EnvironmentEnum {
    // -----------------------------------------------------------------------------------
    //                                    Dev
    // -----------------------------------------------------------------------------------
    /**
     * iOS header file:
     * Dev server environment
     *
     * Android SDK:
     * https://api.dev.idnow.de
     */
    DEV = 'DEV',

    /**
     * iOS header file:
     * Dev0 server environment
     *
     * Android SDK:
     * https://api.dev0.idnow.de
     */
    DEV_0 = 'DEV_0',

    /**
     * iOS header file:
     * Dev1 server environment
     *
     * Android SDK:
     * https://api.dev1.idnow.de
     */
    DEV_1 = 'DEV_1',

    /**
     * iOS header file:
     * Dev2 server environment
     *
     * Android SDK:
     * https://api.dev2.idnow.de
     */
    DEV_2 = 'DEV_2',

    /**
     * iOS header file:
     * Dev3 server environment
     *
     * Android SDK:
     * https://api.dev3.idnow.de
     */
    DEV_3 = 'DEV_3',

    /**
     * iOS header file:
     * Dev4 server environment
     *
     * Android SDK:
     * https://api.dev4.idnow.de
     */
    DEV_4 = 'DEV_4',

    /**
     * iOS header file:
     * Dev5 server environment
     *
     * Android SDK:
     * https://api.dev5.idnow.de
     */
    DEV_5 = 'DEV_5',

    // -----------------------------------------------------------------------------------
    //                                    Test
    // -----------------------------------------------------------------------------------

    /**
     * iOS header file:
     * Test server environment
     *
     * Android SDK:
     * https://api.test.online-ident.ch
     * https://api.test.idnow.de
     */
    TEST = 'TEST',

    /**
     * iOS header file:
     * Test server environment
     *
     * Android SDK:
     * https://api.test1.idnow.de
     */
    TEST_1 = 'TEST_1',

    /**
     * iOS header file:
     * Test server environment
     *
     * Android SDK:
     * https://api.test2.idnow.de
     */
    TEST_2 = 'TEST_2',

    /**
     * iOS header file:
     * Test server environment
     *
     * Android SDK:
     * https://api.test3.idnow.de
     */
    TEST_3 = 'TEST_3',

    // -----------------------------------------------------------------------------------
    //                                    Staging
    // -----------------------------------------------------------------------------------
    /**
     * Only available on Android
     *
     * Android SDK:
     * https://api.staging1.idnow.de
     */
    STAGING_1 = 'STAGING_1',

    // -----------------------------------------------------------------------------------
    //                                    Live
    // -----------------------------------------------------------------------------------
    /**
     * iOS header file:
     * Live server environment
     *
     * Android SDK:
     * https://api.idnow.de
     */
    LIVE = 'LIVE',

    // -----------------------------------------------------------------------------------
    //                                    Intrum
    // -----------------------------------------------------------------------------------
    /**
     * Only available on iOS
     *
     * iOS header file:
     * Intrum server environment
     */
    INTRUM = 'INTRUM',

    /**
     * Only available on iOS
     *
     * iOS header file:
     * Intrum test server environment
     */
    INTRUM_TEST = 'INTRUM_TEST',

    // -----------------------------------------------------------------------------------
    //                                    Other
    // -----------------------------------------------------------------------------------

    /**
     * iOS header file:
     * Custom server environment
     *
     * Android SDK:
     * Api Host
     */
    CUSTOM = 'CUSTOM',

    /**
     * Only available on Android
     *
     * Maybe the same as INTRUM
     *
     * Android SDK:
     * https://api.online-ident.ch
     */
    INT = 'INT',

    /**
     * Only available on iOS
     *
     * iOS header file:
     * Server environment not defined
     */
    NOT_DEFINED = 'NOT_DEFINED',
}
