/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookCategoryDto } from './WebhookCategoryDto';
import type { WebhookEventDto } from './WebhookEventDto';

export type WebhookEventListData = {
    /**
     * Category List
     */
    categories: Array<WebhookCategoryDto>;
    /**
     * Event list
     */
    events: Array<WebhookEventDto>;
};
