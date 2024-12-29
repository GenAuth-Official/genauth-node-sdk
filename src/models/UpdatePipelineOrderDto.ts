/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdatePipelineOrderDto = {
    /**
     * New sorting method, sort according to the order of function ID.
     */
    order: Array<string>;
    /**
     * Function trigger scenario:
     * - `PRE_REGISTER`: before registration
     * - `POST_REGISTER`: after registration
     * - `PRE_AUTHENTICATION`: before authentication
     * - `POST_AUTHENTICATION`: after authentication
     * - `PRE_OIDC_ID_TOKEN_ISSUED`: before OIDC ID Token issuance
     * - `PRE_OIDC_ACCESS_TOKEN_ISSUED`: before OIDC Access Token issuance
     * - `PRE_COMPLETE_USER_INFO`: before completing user information
     *
     */
    scene: UpdatePipelineOrderDto.scene;
};

export namespace UpdatePipelineOrderDto {

    /**
     * Function trigger scenario:
     * - `PRE_REGISTER`: before registration
     * - `POST_REGISTER`: after registration
     * - `PRE_AUTHENTICATION`: before authentication
     * - `POST_AUTHENTICATION`: after authentication
     * - `PRE_OIDC_ID_TOKEN_ISSUED`: before OIDC ID Token issuance
     * - `PRE_OIDC_ACCESS_TOKEN_ISSUED`: before OIDC Access Token issuance
     * - `PRE_COMPLETE_USER_INFO`: before completing user information
     *
     */
    export enum scene {
        PRE_REGISTER = 'PRE_REGISTER',
        POST_REGISTER = 'POST_REGISTER',
        PRE_AUTHENTICATION = 'PRE_AUTHENTICATION',
        POST_AUTHENTICATION = 'POST_AUTHENTICATION',
        PRE_OIDC_ID_TOKEN_ISSUED = 'PRE_OIDC_ID_TOKEN_ISSUED',
        PRE_OIDC_ACCESS_TOKEN_ISSUED = 'PRE_OIDC_ACCESS_TOKEN_ISSUED',
        PRE_COMPLETE_USER_INFO = 'PRE_COMPLETE_USER_INFO',
        PRE_MFA_VERIFY = 'PRE_MFA_VERIFY',
        POST_MFA_VERIFY = 'POST_MFA_VERIFY',
    }


}
