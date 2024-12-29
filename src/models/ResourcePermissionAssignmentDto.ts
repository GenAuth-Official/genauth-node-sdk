/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResourcePermissionAssignmentDto = {
    /**
     * Subject type
     */
    targetType: ResourcePermissionAssignmentDto.targetType;
    /**
     * Subject unique identifier
     */
    targetIdentifier: string;
    /**
     * Operation list
     */
    actions: Array<string>;
};

export namespace ResourcePermissionAssignmentDto {

    /**
     * Subject type
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        DEPARTMENT = 'DEPARTMENT',
    }


}
