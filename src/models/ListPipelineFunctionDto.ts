/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the list of Pipeline functions
 */
export type ListPipelineFunctionDto = {
    /**
     * Filter by the triggering scenario of the function (optional, returns all by default):
     * - `PRE_REGISTER`: before registration
     * - `POST_REGISTER`: after registration
     * - `PRE_AUTHENTICATION`: before authentication
     * - `POST_AUTHENTICATION`: after authentication
     * - `PRE_OIDC_ID_TOKEN_ISSUED`: before OIDC ID Token issuance
     * - `PRE_OIDC_ACCESS_TOKEN_ISSUED`: before OIDC Access Token issuance
     * - `PRE_COMPLETE_USER_INFO`: before completing user information
     *
     */
    scene?: any;
};
