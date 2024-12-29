/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserMfaRespDto = {
    /**
     * Whether TOTP is bound, optional values enabled, disabled
     */
    totpStatus: string;
    /**
     * Whether face MFA is bound, optional values enabled, disabled
     */
    faceMfaStatus: string;
    /**
     * Whether SMS MFA is bound, optional values enabled, disabled
     */
    smsMfaStatus: string;
    /**
     * Whether EMAIL MFA is bound, optional values enabled, disabled
     */
    emailMfaStatus: string;
};
