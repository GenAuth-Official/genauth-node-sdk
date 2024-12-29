/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateEmailByEmailPassCodeDto = {
    /**
     * New email
     */
    newEmail: string;
    /**
     * New email verification code
     */
    newEmailPassCode: string;
    /**
     * Old email address. If the user pool is enabled to modify the email address and need to verify the previous email address, this parameter is required.
     */
    oldEmail?: string;
    /**
     * Old email verification code. If the user pool is enabled to modify the email address and needs to verify the previous email address, this parameter is required.
     */
    oldEmailPassCode?: string;
};
