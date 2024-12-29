/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActionAuth } from './ActionAuth';

export type ListResourceTargetsDtoResp = {
    /**
     * Resource path
     */
    resource: string;
    /**
     * Data resource permission operation list
     */
    actionAuthList: Array<ActionAuth>;
};
