/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookLogDto } from './WebhookLogDto';

export type ListWebhookLogsData = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     * Return to list
     */
    list: Array<WebhookLogDto>;
};
