/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FactorProfile } from './FactorProfile';

export type SendEnrollFactorRequestDto = {
    /**
     *Details of MFA certification elements
     */
    profile: FactorProfile;
    /**
     * MFA Certification Element Type:
     * - `OTP`: OTP
     * - `SMS`: text message
     * - `EMAIL`: email
     * - `FACE`: human face
     *
     */
    factorType: SendEnrollFactorRequestDto.factorType;
};

export namespace SendEnrollFactorRequestDto {

    /**
     * MFA Certification Element Type:
     * - `OTP`: OTP
     * - `SMS`: text message
     * - `EMAIL`: email
     * - `FACE`: human face
     *
     */
    export enum factorType {
        OTP = 'OTP',
        SMS = 'SMS',
        EMAIL = 'EMAIL',
        FACE = 'FACE',
    }


}
