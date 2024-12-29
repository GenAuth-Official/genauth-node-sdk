/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PostItemDto } from './PostItemDto';

export type PostPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     *Response data
     */
    list: Array<PostItemDto>;
};
