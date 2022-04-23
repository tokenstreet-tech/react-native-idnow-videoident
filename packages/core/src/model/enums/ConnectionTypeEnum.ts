/**
 * iOS header file:
 * The type of connection used to get events from the backend
 *
 * iOS README:
 * The connection type to use to talk the backend. (Websocket)
 */
export enum ConnectionTypeEnum {
    /**
     * iOS header file:
     * Use websockets using SocketRocket (default)
     */
    WEBSOCKET = 'WEBSOCKET',
    /**
     * iOS header file:
     * Use long polling
     */
    LONG_POLLING = 'LONG_POLLING',
}
