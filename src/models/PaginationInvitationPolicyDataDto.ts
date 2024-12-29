/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetInvitationPolicyDto } from './GetInvitationPolicyDto';

export type PaginationInvitationPolicyDataDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     *Response data
     */
    list: Array<GetInvitationPolicyDto>;
};
