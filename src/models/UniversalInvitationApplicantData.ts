/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommonUserDto } from './CommonUserDto';

export type UniversalInvitationApplicantData = {
    /**
     * Application ID
     */
    id: string;
    /**
     * Applicant
     */
    applicant: string;
    /**
     * Mail
     */
    email: string;
    /**
     * Inviter ID
     */
    inviterId: string;
    /**
     *Approver ID
     */
    operatorId?: string;
    /**
     * Approval status:
     * - `PENDING`: Pending approval
     * - `PASSED`: passed
     * - `REJECTED`: Rejected
     */
    status: UniversalInvitationApplicantData.status;
    /**
     * How to join:
     * - `MANUAL`: manual approval
     * - `AUTO`: automatically join
     */
    channel: UniversalInvitationApplicantData.channel;
    /**
     *Inviter details
     */
    inviterDetail?: CommonUserDto;
    /**
     * Approver details
     */
    operatorDetail?: CommonUserDto;
};

export namespace UniversalInvitationApplicantData {

    /**
     * Approval status:
     * - `PENDING`: Pending approval
     * - `PASSED`: passed
     * - `REJECTED`: Rejected
     */
    export enum status {
        PENDING = 'PENDING',
        PASSED = 'PASSED',
        REJECTED = 'REJECTED',
    }

    /**
     * How to join:
     * - `MANUAL`: manual approval
     * - `AUTO`: automatically join
     */
    export enum channel {
        MANUAL = 'MANUAL',
        AUTO = 'AUTO',
    }


}
