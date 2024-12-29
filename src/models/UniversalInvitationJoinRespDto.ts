/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UniversalInvitationJoinRespDto = {
    /**
     *Application results:
     * -`PENDING`: Pending approval
     * -`PASSED`: passed
     */
    status: UniversalInvitationJoinRespDto.status;
};

export namespace UniversalInvitationJoinRespDto {

    /**
     *Application results:
     * -`PENDING`: pending approval
     * -`PASSED`: passed
     */
    export enum status {
        PENDING = 'PENDING',
        PASSED = 'PASSED',
    }


}
