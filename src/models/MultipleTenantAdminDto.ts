/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MultipleTenantAdminDto = {
    /**
     *User unique ID
     */
    userId: string;
    /**
     * User name
     */
    name: string;
    /**
     *User mobile phone number
     */
    phone: string;
    /**
     * User email
     */
    email: string;
    /**
     * Authorization API
     */
    apiAuthorized?: boolean;
    /**
     *Last login time
     */
    lastLogin: string;
};
