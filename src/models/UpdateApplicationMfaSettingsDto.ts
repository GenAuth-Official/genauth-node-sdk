/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateApplicationMfaSettingsDto = {
    /**
     * The application ID to which it belongs
     */
    appId: string;
    /**
     * List of enabled MFA authentication factors
     */
    enabledFactors?: Array<'OTP' | 'SMS' | 'EMAIL' | 'FACE'>;
    /**
     * Closed list of MFA authentication factors
     */
    disabledFactors?: Array<'OTP' | 'SMS' | 'EMAIL' | 'FACE'>;
};
