/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArrayAuthorize } from './ArrayAuthorize';
import type { StrAuthorize } from './StrAuthorize';
import type {TreeAuthorize} from './TreeAuthorize';

export type OpenResource = {
    /**
     * Data resource code authorized under the data policy
     */
    resourceCode: string;
    /**
     * The data resource types authorized under the data policy currently support three types: tree structure (TREE), string (STRING), and array (ARRAY). Different structures are returned according to different types.
     * - `STRING`: String type result StrAuthorize
     * - `ARRAY`: array type ArrayAuthorize
     * - `TREE`: tree type TreeAuthorize
     */
    resourceType: OpenResource.resourceType;
    /**
     * String resource for data strategy
     */
    strAuthorize?: StrAuthorize;
    /**
     * Array resources of data strategy
     */
    arrAuthorize?: ArrayAuthorize;
    /**
     * Tree resources for data strategy
     */
    treeAuthorize?: TreeAuthorize;
};

export namespace OpenResource {

    /**
     * The data resource types authorized under the data policy currently support three types: tree structure (TREE), string (STRING), and array (ARRAY). Different structures are returned according to different types.
     * - `STRING`: String type result StrAuthorize
     * - `ARRAY`: array type ArrayAuthorize
     * - `TREE`: tree type TreeAuthorize
     */
    export enum resourceType {
        TREE = 'TREE',
        STRING = 'STRING',
        ARRAY = 'ARRAY',
    }


}
