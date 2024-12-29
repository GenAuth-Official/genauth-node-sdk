/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OpenEventDto } from './OpenEventDto';

export type OpenEventPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     * Data list
     */
    list: Array<OpenEventDto>;
};
