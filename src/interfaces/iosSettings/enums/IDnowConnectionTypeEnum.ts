/**
 *  The type of connection used to get events from the backend
 */
export enum IDnowConnectionTypeEnum {
    /**
     * Use websockets using SocketRocket (default)
     */
    IDnowConnectionTypeWebsocket = 'IDnowConnectionTypeWebsocket',
    /**
     * IDnowConnectionTypeLongPolling
     */
    IDnowConnectionTypeLongPolling = 'IDnowConnectionTypeLongPolling',
}
