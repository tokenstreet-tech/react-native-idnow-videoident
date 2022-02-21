/**
 * You can set to use your own servers. When this setting is enabled, apiHost, webHost and websocketHost must also be set.
 *
 * Environment must be set to EnvironmentEnum.CUSTOME
 * IDnowSDK.setEnvironment(IDnowSDK.Server.CUSTOM);
 */
export interface IAndroidCustomServer {
    /**
     * README:
     * @example https://api.yourserver.com
     */
    apiHost?: string;

    /**
     * README:
     * @example https://www.yourserver.com
     */
    webHost?: string;

    /**
     * README:
     * @example https://websocket.yourserver.com
     */
    websocketHost?: string;

    /**
     * README:
     * @example https://video.yourserver.com
     */
    videoHost?: string;

    /**
     * README:
     * @example video.yourserver.com
     */
    stunHost?: string;

    /**
     * README:
     * @example 3478
     */
    stunPort?: number;
}
