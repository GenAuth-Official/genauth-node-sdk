/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TenantApplicationDto = {
    /**
     *UserPool ID
     */
    userPoolId: string;
    /**
     * App ID
     */
    tenantAppId: string;
    /**
     *App name
     */
    name: string;
    /**
     * Application description information
     */
    description?: string;
    /**
     * App Logo
     */
    logo: string;
    /**
     *Application type
     */
    applicationType: string;
    /**
     * Whether to enable SSO single sign-on
     */
    ssoEnabled: boolean;
    /**
     * App ID
     */
    appId: string;
};
