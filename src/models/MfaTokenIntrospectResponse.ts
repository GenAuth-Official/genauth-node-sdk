/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MfaTokenIntrospectResponse = {
    /**
     * Is the Token valid?
     */
    active: boolean;
    /**
     * The user pool ID that issued this Token, returned when the token is valid.
     */
    userPoolId?: string;
    /**
     * The user ID that issued this Token, returned when the token is valid.
     */
    userId?: string;
    /**
     * The expiration time of the Token, which is a timestamp in seconds. Returned when the token is valid.
     */
    exp?: number;
    /**
     * The issuance time of the Token is a timestamp in seconds. Returned when the token is valid.
     */
    iat?: number;
};
