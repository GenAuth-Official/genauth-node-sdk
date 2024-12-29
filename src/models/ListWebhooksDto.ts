/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the Webhook list, select the number of pages and paging size to obtain
 */
export type ListWebhooksDto = {
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
};
