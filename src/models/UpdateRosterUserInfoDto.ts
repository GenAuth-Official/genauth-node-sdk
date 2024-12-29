/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateRosterUserInfoDto = {
    /**
     * Email address of the invitee, not case sensitive
     */
    email: string;
    /**
     * Name of invitee
     */
    name: string;
    /**
     * Invitee ID
     */
    inviteeId: string;
    /**
     * List ID
     */
    rosterId: string;
    /**
     * Invitee’s mobile phone number
     */
    phone?: string;
    /**
     *International area code of the invitee’s mobile phone number
     */
    phoneCountryCode?: string;
};
