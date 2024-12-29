/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DefaultPasswordConfigDto } from './DefaultPasswordConfigDto';
import type { InvitationLinkConfigDto } from './InvitationLinkConfigDto';

export type UpdateInvitationPolicyDto = {
    /**
     * Policy ID
     */
    policyId: string;
    /**
     * Invitation policy name
     */
    name?: string;
    /**
     *Invitation method:
     * - `email`: email
     */
    inviteMethod?: UpdateInvitationPolicyDto.inviteMethod;
    /**
     * Invitation link configuration
     */
    inviteLinkConfig?: InvitationLinkConfigDto;
    /**
     * Initialize password configuration
     */
    defaultPasswordConfig?: DefaultPasswordConfigDto;
    /**
     * Whether the invitation email displays the password
     */
    showPasswordInInviteEmail?: boolean;
    /**
     * Whether to enable identity verification code
     */
    enabledIdentifierVerify?: boolean;
    /**
     * How to send authentication code
     * - `priorityEmail`: priority email
     * - `prioritySMS`: Priority SMS
     */
    sendVerifyCodeMethod?: UpdateInvitationPolicyDto.sendVerifyCodeMethod;
    /**
     * Whether to enable information completion
     */
    enabledInfoFill?: boolean;
    /**
     * Information completion page prompts
     */
    registerInfoFillMsg?: string;
    /**
     * Whether to enable third-party identity source binding
     */
    enabledExtIdp?: boolean;
    /**
     * Whether to allow skipping third-party identity source binding
     */
    allowSkipBindExtIdp?: boolean;
    /**
     * Identity source binding prompt information
     */
    extIdpBindMsg?: string;
    /**
     * List of identity source IDs that support binding
     */
    extIdpConnIds?: Array<string>;
    /**
     * Registration information completion field list configuration
     */
    extendsFields?: Array<string>;
    /**
     * Invitation email template type
     */
    inviteEmailTemplateType?: string;
    /**
     * Welcome email template type
     */
    welcomeEmailTemplateType?: string;
};

export namespace UpdateInvitationPolicyDto {

    /**
     *Invitation method:
     * - `email`: email
     */
    export enum inviteMethod {
        EMAIL = 'email',
    }

    /**
     * How to send authentication code
     * - `priorityEmail`: priority email
     * - `prioritySMS`: Priority SMS
     */
    export enum sendVerifyCodeMethod {
        PRIORITY_SMS = 'prioritySMS',
        PRIORITY_EMAIL = 'priorityEmail',
    }


}
