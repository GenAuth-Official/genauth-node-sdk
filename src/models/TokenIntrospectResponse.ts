/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TokenIntrospectResponse = {
    /**
     * Is the Token valid?
     */
    active: boolean;
    /**
     * The user ID corresponding to this Token, returned when the token is valid.
     */
    sub?: string;
    /**
     * The application ID that issued this token, returned when the token is valid.
     */
    client_id?: string;
    /**
     * The expiration time of the Token, which is a timestamp in seconds. Returned when the token is valid.
     */
    exp?: number;
    /**
     * The issuance time of the Token is a timestamp in seconds. Returned when the token is valid.
     */
    iat?: number;
    /**
     * Issuer, returned when the token is valid.
     */
    iss?: string;
    /**
     * JTI, returned when the token is valid.
     */
    jti?: string;
    /**
     * Use a comma-separated scope array to return when the token is valid.
     */
    scope?: string;
    /**
     * Token Type, the default is Bearer, returned when the token is valid.
     */
    token_type?: string;
};
