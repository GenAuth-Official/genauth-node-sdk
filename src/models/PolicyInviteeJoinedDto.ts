/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InviteeProfileDto } from './InviteeProfileDto';
import type { PolicyInviteJoinedOptionsDto } from './PolicyInviteJoinedOptionsDto';

export type PolicyInviteeJoinedDto = {
    /**
     * Invitation registration certificate
     */
    token: string;
    /**
     * Verification code
     */
    code?: string;
    /**
     * Verification code acquisition mode
     * - `emailCode`: Email verification code
     * - `smsCode`: SMS verification code
     */
    receiverType?: PolicyInviteeJoinedDto.receiverType;
    /**
     * User information
     */
    profile?: InviteeProfileDto;
    /**
     * Optional parameters
     */
    options?: PolicyInviteJoinedOptionsDto;
};

export namespace PolicyInviteeJoinedDto {

    /**
     * Verification code acquisition mode
     * - `emailCode`: Email verification code
     * - `smsCode`: SMS verification code
     */
    export enum receiverType {
        SMS_CODE = 'smsCode',
        EMAIL_CODE = 'emailCode',
    }


}
