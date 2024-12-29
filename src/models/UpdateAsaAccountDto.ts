/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateAsaAccountDto = {
    /**
     * Account information, usually a key-value pair containing "account", "password" key
     */
    accountInfo: any;
    /**
     * ASA account ID
     */
    accountId: string;
    /**
     * The application ID to which it belongs
     */
    appId: string;
};
