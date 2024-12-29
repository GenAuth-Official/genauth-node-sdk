/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SendTenantEmailDto } from './SendTenantEmailDto';

export type SendManyTenantEmailDto = {
    /**
     * Administrator name
     */
    adminName: string;
    /**
     * Import id
     */
    importId: number;
    /**
     * Administrators who need email notification
     */
    users: Array<SendTenantEmailDto>;
};
