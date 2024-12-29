/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LoggedInAppsDto = {
    /**
     * Application ID
     */
    appId: string;
    /**
     * Application name
     */
    appName: string;
    /**
     * Application login address
     */
    appLoginUrl: string;
    /**
     * Application Logo
     */
    appLogo: string;
    /**
     * Whether you are currently logged in
     */
    active: boolean;
};
