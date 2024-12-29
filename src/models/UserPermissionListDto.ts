/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OpenResource } from './OpenResource';

export type UserPermissionListDto = {
    /**
     * User ID authorized by data policy
     */
    userId: string;
    /**
     * Permission space code authorized by data policy
     */
    namespaceCode: string;
    /**
     * List of all data policy resources of the user in the permission space
     */
    resourceList?: Array<OpenResource>;
};
