/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResetPasswordByEmailPassCodeDto } from './ResetPasswordByEmailPassCodeDto';
import type { ResetPasswordByPhonePassCodeDto } from './ResetPasswordByPhonePassCodeDto';

export type VerifyResetPasswordRequestDto = {
    /**
     * Verification method used for forgotten password requests:
     * - `EMAIL_PASSCODE`: Verify via email verification code
     * - `PHONE_PASSCODE`: Verify via mobile phone number verification code
     *
     */
    verifyMethod: VerifyResetPasswordRequestDto.verifyMethod;
    /**
     * Data verified using mobile phone number verification code
     */
    phonePassCodePayload?: ResetPasswordByPhonePassCodeDto;
    /**
     * Data verified using email verification code
     */
    emailPassCodePayload?: ResetPasswordByEmailPassCodeDto;
};

export namespace VerifyResetPasswordRequestDto {

    /**
     * Verification method used for forgotten password requests:
     * - `EMAIL_PASSCODE`: Verify via email verification code
     * - `PHONE_PASSCODE`: Verify through mobile phone number verification code
     *
     */
    export enum verifyMethod {
        EMAIL_PASSCODE = 'EMAIL_PASSCODE',
        PHONE_PASSCODE = 'PHONE_PASSCODE',
    }


}
