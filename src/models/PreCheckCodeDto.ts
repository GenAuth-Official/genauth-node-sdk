/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PreCheckEmailCodeDto } from './PreCheckEmailCodeDto';
import type { PreCheckSmsCodeDto } from './PreCheckSmsCodeDto';

export type PreCheckCodeDto = {
    /**
     * Verification code type
     */
    codeType: PreCheckCodeDto.codeType;
    /**
     * SMS verification code verification parameters
     */
    smsCodePayload?: PreCheckSmsCodeDto;
    /**
     * Email verification code verification parameters
     */
    emailCodePayload?: PreCheckEmailCodeDto;
};

export namespace PreCheckCodeDto {

    /**
     * Verification code type
     */
    export enum codeType {
        SMS = 'SMS',
        EMAIL = 'EMAIL',
    }


}
