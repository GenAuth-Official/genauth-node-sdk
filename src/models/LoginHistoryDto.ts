/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GeoIp } from './GeoIp';
import type { ParsedUserAgent } from './ParsedUserAgent';

export type LoginHistoryDto = {
    /**
     *User ID
     */
    userId: string;
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
     * Login time
     */
    loginAt: string;
    /**
     * Client IP used when logging in
     */
    clientIp: string;
    /**
     * Whether the login is successful
     */
    success: boolean;
    /**
     * Specific error message when login fails
     */
    errorMessage?: string;
    /**
     *User Agent
     */
    userAgent: string;
    /**
     * Parsed User Agent
     */
    parsedUserAgent: ParsedUserAgent;
    /**
     * Login method used
     */
    loginMethod: string;
    /**
     * Geographical location
     */
    geoip: GeoIp;
    /**
     * Tenant ID
     */
    tenantId?: string;
};
