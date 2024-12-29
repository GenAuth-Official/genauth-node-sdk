/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyInviteCodeDto = {
    /**
     * Verification code type
     * - `emailCode`: Email verification code
     * - `smsCode`: SMS verification code
     *
     */
    receiverType: VerifyInviteCodeDto.receiverType;
    /**
     * Verification code
     */
    code: string;
    /**
     * Invitation registration certificate
     */
    token: string;
};

export namespace VerifyInviteCodeDto {

    /**
     * Verification code type
     * - `emailCode`: Email verification code
     * - `smsCode`: SMS verification code
     *
     */
    export enum receiverType {
        SMS_CODE = 'smsCode',
        EMAIL_CODE = 'emailCode',
    }


}
