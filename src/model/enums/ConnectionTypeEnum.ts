/**
 * iOS Header file:
 * The type of connection used to get events from the backend
 *
 * iOS README:
 * The connection type to use to talk the backend. (Websocket)
 */
export enum ConnectionTypeEnum {
    /**
     * iOS Header file:
     * Use websockets using SocketRocket (default)
     */
    WEBSOCKET = 'WEBSOCKET',
    /**
     * iOS Header file:
     * Use long polling
     */
    LONG_POLLING = 'LONG_POLLING',
}
