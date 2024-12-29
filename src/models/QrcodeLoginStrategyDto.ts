/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QrcodeLoginStrategyDto = {
    /**
     * QR code validity time, unit seconds
     */
    qrcodeExpiresIn: number;
    /**
     * Time length unit, Second/Minute/Hour/Day, for display only
     */
    qrcodeExpiresInUnit?: string;
    /**
     * ticket validity time, unit seconds
     */
    ticketExpiresIn: number;
    /**
     * Time length unit, Second/Minute/Hour/Day, for display only
     */
    ticketExpiresInUnit?: string;
    /**
     * The Web polling interface returns complete user information. For details, see this document: Web polling interface returns complete user information.
     */
    allowExchangeUserInfoFromBrowser: boolean;
    /**
     * Allows using tickets in the browser to exchange user information. For details, see this document: Web polling interface returns complete user information
     */
    returnFullUserInfo: boolean;
};
