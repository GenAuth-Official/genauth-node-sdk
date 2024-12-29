/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubjectRespDto = {
    /**
     * Subject ID, including user ID, user group ID, role ID, organization ID
     */
    id: string;
    /**
     * Subject type, including four types: USER, GROUP, ROLE, and ORG
     */
    type: SubjectRespDto.type;
    /**
     * Subject name, including user name, user group name, role name, organization name
     */
    name: string;
};

export namespace SubjectRespDto {

    /**
     * Subject type, including four types: USER, GROUP, ROLE, and ORG
     */
    export enum type {
        USER = 'USER',
        ORG = 'ORG',
        GROUP = 'GROUP',
        ROLE = 'ROLE',
    }


}
