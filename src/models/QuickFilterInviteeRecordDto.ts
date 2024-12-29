/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QuickFilterInviteeRecordDto = {
    /**
     * List ID
     */
    rosterId: string;
    /**
     * List name
     */
    rosterName: string;
    /**
     * Invitee ID
     */
    inviteeId: string;
    /**
     * Name of invitee
     */
    inviteeName: string;
    /**
     *International area code of the invitee’s mobile phone number
     */
    inviteePhoneCountryCode?: string;
    /**
     * Invitee’s mobile phone number
     */
    inviteePhone?: string;
    /**
     * Email address of the invitee, not case sensitive
     */
    inviteeEmail: string;
    /**
     * Invitee status
     */
    inviteeStatus: QuickFilterInviteeRecordDto.inviteeStatus;
    /**
     * Source of invitees
     */
    inviteeSource: QuickFilterInviteeRecordDto.inviteeSource;
};

export namespace QuickFilterInviteeRecordDto {

    /**
     * Invitee status
     */
    export enum inviteeStatus {
        INVITED = 'invited',
        REGISTERING = 'registering',
        REGISTERED = 'registered',
        REVERTED = 'reverted',
        NOT_INVITED = 'notInvited',
        EXPIRED = 'expired',
        INVITATION_SEND_FAIL = 'invitationSendFail',
        JOINED_BY_OTHER = 'joinedByOther',
    }

    /**
     * Source of invitees
     */
    export enum inviteeSource {
        MANUAL_CREATE = 'manualCreate',
        FILE_IMPORT = 'fileImport',
    }


}
