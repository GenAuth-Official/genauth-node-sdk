/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SendTenantSmsDto } from './SendTenantSmsDto';

export type SendManyTenantSmsDto = {
    /**
     * Administrator name
     */
    adminName: string;
    /**
     * Import id
     */
    importId: number;
    /**
     * Administrators who need SMS notification
     */
    users: Array<SendTenantSmsDto>;
};
