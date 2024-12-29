/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListDataResourcesRespDto = {
    /**
     * Data resource name, unique within the permission space
     */
    resourceName: string;
    /**
     * Data resource Code, unique in the permission space
     */
    resourceCode: string;
    /**
     * Data resource type, currently supports tree structure (TREE), string (STRING), and array (ARRAY)
     */
    type: ListDataResourcesRespDto.type;
    /**
     * Data resource description
     */
    description?: string;
    /**
     * The permission space code to which the data resource belongs
     */
    namespaceCode: string;
    /**
     * The name of the permission space to which the data resource belongs
     */
    namespaceName: string;
    /**
     * The number of data resource associated authorizations
     */
    authorizationNum: number;
    /**
     *Data resource update time
     */
    updatedAt: string;
};

export namespace ListDataResourcesRespDto {

    /**
     * Data resource type, currently supports tree structure (TREE), string (STRING), and array (ARRAY)
     */
    export enum type {
        TREE = 'TREE',
        STRING = 'STRING',
        ARRAY = 'ARRAY',
    }


}
