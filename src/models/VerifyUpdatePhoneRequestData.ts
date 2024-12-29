/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyUpdatePhoneRequestData = {
    /**
     * Used to modify the current mobile phone number token. You need to use this token to request the **modify mobile phone number** interface.
     */
    updatePhoneToken: string;
    /**
     * Expiration time, unit is seconds.
     */
    tokenExpiresIn: number;
};
