/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SetCustomFieldDto } from './SetCustomFieldDto';

export type SetCustomFieldsReqDto = {
    /**
     * Custom field list
     */
    list: Array<SetCustomFieldDto>;
    /**
     * Tenant ID
     */
    tenantId?: string;
};
