/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResetPasswordVerify = {
    /**
     * Used to reset password token
     */
    passwordResetToken: string;
    /**
     * Expiration time, unit is seconds.
     */
    tokenExpiresIn: number;
};
