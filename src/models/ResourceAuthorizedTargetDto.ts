/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResourceAuthorizedTargetDto = {
    /**
     * Subject type
     */
    targetType: ResourceAuthorizedTargetDto.targetType;
    /**
     * Subject unique identifier
     */
    targetIdentifier: string;
    /**
     * Operation list
     */
    actions: Array<string>;
};

export namespace ResourceAuthorizedTargetDto {

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
