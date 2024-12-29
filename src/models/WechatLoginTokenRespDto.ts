/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WechatLoginTokenRespDto = {
    /**
     * Scope in login request
     */
    scope?: string;
    /**
     * Interface call credentials, authorized to access the resource API within a limited time
     */
    access_token?: string;
    /**
     * The user's identity credentials will contain user information after parsing
     */
    id_token?: string;
    /**
     * refresh_token is used to obtain new AccessToken
     */
    refresh_token?: string;
    /**
     * token type
     */
    token_type: string;
    /**
     *Expiration time in seconds
     */
    expire_in: number;
};
