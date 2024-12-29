/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GeoIp } from './GeoIp';
import type { ParsedUserAgent } from './ParsedUserAgent';

export type UserActionLogDto = {
    /**
     *User ID
     */
    userId: string;
    /**
     * User avatar
     */
    userAvatar: string;
    /**
     * User display name, displayed in the following user field order: nickname > username > name > givenName > familyName -> email -> phone -> id
     */
    userDisplayName: string;
    /**
     *Number of user logins
     */
    userLoginsCount: number;
    /**
     * Application ID
     */
    appId: string;
    /**
     * Application name
     */
    appName: string;
    /**
     * Client IP, you can filter based on the client IP when logging in. By default, the login history of all login IPs is not uploaded.
     */
    clientIp?: string;
    /**
     *Event type:
     * - `login`: login
     * - `logout`: log out
     * - `register`: register
     * - `verifyMfa`: Verify MFA
     * - `updateUserProfile`: Modify user information
     * - `updateUserPassword`: change password
     * - `updateUserEmail`: modify email
     * - `updateUserPhone`: Modify mobile phone number
     * - `bindMfa`: bind MFA
     * - `bindEmail`: bind email
     * - `bindPhone`: Bind mobile phone number
     * - `unbindPhone`: Unbind mobile phone number
     * - `unbindEmail`: Unbind email
     * - `unbindMFA`: Unbind MFA
     * - `deleteAccount`: cancel account
     * - `verifyFirstLogin`: first login verification
     *
     */
    eventType: UserActionLogDto.eventType;
    /**
     *Event details
     */
    eventDetail?: string;
    /**
     * Whether it was successful
     */
    success: boolean;
    /**
     * Application login address
     */
    appLoginUrl: string;
    /**
     * Application Logo
     */
    appLogo: string;
    /**
     *User Agent
     */
    userAgent: string;
    /**
     * Parsed User Agent
     */
    parsedUserAgent: ParsedUserAgent;
    /**
     * Geographical location
     */
    geoip: GeoIp;
    /**
     * time
     */
    timestamp: string;
    /**
     * Request ID
     */
    requestId: string;
};

export namespace UserActionLogDto {

    /**
     *Event type:
     * - `login`: login
     * - `logout`: log out
     * - `register`: register
     * - `verifyMfa`: Verify MFA
     * - `updateUserProfile`: Modify user information
     * - `updateUserPassword`: change password
     * - `updateUserEmail`: modify email
     * - `updateUserPhone`: Modify mobile phone number
     * - `bindMfa`: bind MFA
     * - `bindEmail`: bind email
     * - `bindPhone`: Bind mobile phone number
     * - `unbindPhone`: Unbind mobile phone number
     * - `unbindEmail`: Unbind email
     * - `unbindMFA`: Unbind MFA
     * - `deleteAccount`: cancel account
     * - `verifyFirstLogin`: first login verification
     *
     */
    export enum eventType {
        LOGIN = 'login',
        LOGOUT = 'logout',
        REGISTER = 'register',
        VERIFY_MFA = 'verifyMfa',
        UPDATE_USER_PREFILE = 'updateUserPrefile',
        UPDATE_USER_PASSWORD = 'updateUserPassword',
        UPDATE_USER_EMAIL = 'updateUserEmail',
        UPDATE_USER_PHONE = 'updateUserPhone',
        BIND_MFA = 'bindMfa',
        BIND_EMAIL = 'bindEmail',
        BIND_PHONE = 'bindPhone',
        UNBIND_PHONE = 'unbindPhone',
        UNBIND_EMAIL = 'unbindEmail',
        UNBIND_MFA = 'unbindMFA',
        REFRESH_USER_TOKEN_BY_SELF = 'refreshUserTokenBySelf',
        DELETE_ACCOUNT = 'deleteAccount',
        VERIFY_FIRST_LOGIN = 'verifyFirstLogin',
        SECURITY_RESOURCE_ACCESS = 'securityResourceAccess',
    }


}
