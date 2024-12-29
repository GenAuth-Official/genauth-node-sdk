/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PreCheckCodeDataDto = {
    /**
     * Is the verification code correct and valid?
     */
    isValid: boolean;
    /**
     * If the verification code is incorrect or has expired, specific error message
     */
    message?: string;
};
