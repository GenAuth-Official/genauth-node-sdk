/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubjectDto = {
    /**
     * Subject ID, including user ID, user group ID, role ID, organization ID
     */
    id: string;
    /**
     * Subject type, including four types: USER, GROUP, ROLE, and ORG
     */
    type: SubjectDto.type;
    /**
     * Subject name, including user name, user group name, role name, organization name
     */
    name?: string;
};

export namespace SubjectDto {

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
