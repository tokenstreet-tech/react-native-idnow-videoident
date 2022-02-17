/**
 * You can set to use your own servers. When this setting is enabled, apiHost, webHost and websocketHost must also be set.
 *
 * Environment must be set to EnvironmentEnum.CUSTOME
 * IDnowSDK.setEnvironment(IDnowSDK.Server.CUSTOM);
 */
export interface IAndroidCustomServer {
    /**
     * @example https://api.yourserver.com
     */
    apiHost: string;

    /**
     * @example https://www.yourserver.com
     */
    webHost: string;

    /**
     * @example https://websocket.yourserver.com
     */
    websocketHost: string;

    /**
     * @example https://video.yourserver.com
     */
    videoHost: string;

    /**
     * @example video.yourserver.com
     */
    stunHost: string;

    /**
     * @example 3478
     */
    stunPort: number;
}
