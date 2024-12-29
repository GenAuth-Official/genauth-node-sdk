/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CombineFiltersBaseDto } from './CombineFiltersBaseDto';

export type PaginationUniversalInvitationApplicantQueryDto = {
    /**
     * Current page number, starting from 1
     */
    page?: number;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: number;
    /**
     * Used for fuzzy search based on applicant’s name, mobile phone number or email address, optional.
     */
    keywords?: string;
    /**
     * Complex filter conditions
     */
    filter?: CombineFiltersBaseDto;
    /**
     * Whether to return the inviter details
     */
    withInvitorDetail?: boolean;
    /**
     * Whether to return the approver details
     */
    withOperatorDetail?: boolean;
};
