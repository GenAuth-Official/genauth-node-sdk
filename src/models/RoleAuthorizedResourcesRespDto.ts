/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RoleAuthorizedResourcesRespDto = {
    /**
     * Resource descriptor
     */
    resourceCode: string;
    /**
     * Resource type
     */
    resourceType: RoleAuthorizedResourcesRespDto.resourceType;
    /**
     * List of authorized operations
     */
    actions: Array<string>;
    /**
     * API Identifier corresponding to the resource
     */
    apiIdentifier: string;
};

export namespace RoleAuthorizedResourcesRespDto {

    /**
     * Resource type
     */
    export enum resourceType {
        DATA = 'DATA',
        API = 'API',
        MENU = 'MENU',
        BUTTON = 'BUTTON',
        UI = 'UI',
    }


}
