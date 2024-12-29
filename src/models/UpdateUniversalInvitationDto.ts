/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateUniversalInvitationDto = {
    /**
     * Administrator invitation configuration
     */
    adminInvitationConfig?: boolean;
    /**
     * Member invitation configuration
     */
    memberInvitationConfig?: boolean;
    /**
     * Allow user pool members to use a link to invite new members to join
     */
    enabledMemberInvitation?: boolean;
};
