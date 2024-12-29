/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NamespacesListRespDto } from './NamespacesListRespDto';

export type NamespaceListPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     *Response data
     */
    list: Array<NamespacesListRespDto>;
};
