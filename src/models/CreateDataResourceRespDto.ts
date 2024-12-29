/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataResourceTreeStructs } from './DataResourceTreeStructs';
import type { ExtendField } from './ExtendField';

export type CreateDataResourceRespDto = {
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
    type: CreateDataResourceRespDto.type;
    /**
     * Data resource description
     */
    description?: string;
    /**
     * Data resource structure, supporting string (STRING), tree structure (TREE) and array structure (ARRAY).
     */
    struct: (DataResourceTreeStructs | string | Array<string>);
    /**
     * Extended field list, currently only supports tree type resources
     */
    extendFieldList?: Array<ExtendField>;
    /**
     * Data resource permission operation list
     */
    actions: Array<string>;
};

export namespace CreateDataResourceRespDto {

    /**
     * Data resource type, currently supports tree structure (TREE), string (STRING), and array (ARRAY)
     */
    export enum type {
        TREE = 'TREE',
        STRING = 'STRING',
        ARRAY = 'ARRAY',
    }


}
