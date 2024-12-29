/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendTenantSmsDto = {
    /**
     * Administrator name
     */
    adminName: string;
    /**
     * username
     */
    userName: string;
    /**
     *User unique identifier
     */
    identifier: string;
    /**
     * Administrator mobile phone
     */
    phone: string;
    /**
     * Administrator’s mobile phone area code
     */
    phoneCountryCode: string;
    /**
     * Tenant id
     */
    tenantId: string;
    /**
     * Tenant name
     */
    tenantName: string;
};
