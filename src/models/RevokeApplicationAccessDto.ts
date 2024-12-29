/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeleteApplicationPermissionRecordItem } from './DeleteApplicationPermissionRecordItem';

export type RevokeApplicationAccessDto = {
    /**
     * Application ID
     */
    appId: string;
    /**
     * List of authorized subjects, up to 10 items
     */
    list: Array<DeleteApplicationPermissionRecordItem>;
};
