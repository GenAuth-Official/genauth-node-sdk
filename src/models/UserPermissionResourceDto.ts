/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataResourceActionListDto } from './DataResourceActionListDto';

export type UserPermissionResourceDto = {
    /**
     * Data resource code authorized under the data policy
     */
    resourceCode: string;
    /**
     * Data resource permission operation list
     */
    actionList: Array<DataResourceActionListDto>;
};
