/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdateEmailByEmailPassCodeDto } from './UpdateEmailByEmailPassCodeDto';

export type UpdateEmailVerifyRequestDto = {
    /**
     * Data verified using email verification code method
     */
    emailPasscodePayload: UpdateEmailByEmailPassCodeDto;
    /**
     * Modify the verification method used by the current email address:
     * - `EMAIL_PASSCODE`: Verify through email verification code. Currently only this verification method is supported.
     *
     */
    verifyMethod: UpdateEmailVerifyRequestDto.verifyMethod;
};

export namespace UpdateEmailVerifyRequestDto {

    /**
     * Modify the verification method used by the current email address:
     * - `EMAIL_PASSCODE`: Verify through email verification code. Currently only this verification method is supported.
     *
     */
    export enum verifyMethod {
        EMAIL_PASSCODE = 'EMAIL_PASSCODE',
    }


}
