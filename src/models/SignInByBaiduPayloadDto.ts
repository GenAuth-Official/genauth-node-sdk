/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInByBaiduPayloadDto = {
    /**
     * Authorization code `code` obtained from Baidu mobile social login. and attribute `access_token` optionally with one parameter. If both are not empty, the authorization code `code` parameter will be used first.
     */
    code?: string;
    /**
     * The authorized access certificate `access_token` obtained by Baidu mobile social login. and the attribute `code` optionally taking one parameter. If both are not empty, the authorization code `code` parameter will be used first.
     */
    access_token?: string;
};
