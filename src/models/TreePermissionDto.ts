/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataResourcePolicyTreeStructs } from './DataResourcePolicyTreeStructs';

export type TreePermissionDto = {
    /**
     * Resource id
     */
    resourceId: string;
    /**
     * Resource type, STRING/ARRAY/TREE
     */
    resourceType: string;
    /**
     * Tree structure node list
     */
    nodeAuthActionList: Array<DataResourcePolicyTreeStructs>;
};
