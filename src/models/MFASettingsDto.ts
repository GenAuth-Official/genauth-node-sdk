/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MFASettingsDto = {
    /**
     * List of enabled MFA authentication factors
     */
    enabledFactors: Array<'OTP' | 'SMS' | 'EMAIL' | 'FACE'>;
};
