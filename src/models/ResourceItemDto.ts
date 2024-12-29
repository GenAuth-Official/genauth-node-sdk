/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResourceItemDto = {
    /**
     * Resource unique identifier
     */
    code: string;
    /**
     * Operation type defined by the resource
     */
    actions: Array<string>;
    /**
     * Resource type, such as data, API, button, menu
     */
    resourceType: ResourceItemDto.resourceType;
};

export namespace ResourceItemDto {

    /**
     * Resource type, such as data, API, button, menu
     */
    export enum resourceType {
        DATA = 'DATA',
        API = 'API',
        MENU = 'MENU',
        BUTTON = 'BUTTON',
        UI = 'UI',
    }


}
