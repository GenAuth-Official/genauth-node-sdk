/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MFADisableSettingsDto = {
    /**
     * Closed list of MFA authentication factors
     */
    disableFactors: Array<'OTP' | 'SMS' | 'EMAIL' | 'FACE'>;
};
