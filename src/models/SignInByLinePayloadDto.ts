/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInByLinePayloadDto = {
    /**
     * `access_token` obtained from LINE mobile social login
     */
    access_token: string;
    /**
     * The `id_token` obtained by LINE mobile social login requires `openid` permission. User information will be obtained based on `id_token`, otherwise user information will be obtained based on `access_token`
     */
    id_token?: string;
};
