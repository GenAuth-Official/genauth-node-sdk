/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdateExtendsFieldDto } from './UpdateExtendsFieldDto';

export type PolicyExtendsFieldsDto = {
    /**
     *Field information
     */
    extendsField: UpdateExtendsFieldDto;
    /**
     * Operation type
     * - `add`: add new
     * - `update`: update
     * - `delete`: delete
     * - `reorder`: sort
     */
    action: string;
    /**
     * Policy ID
     */
    policyId: string;
    /**
     * Field sorting
     */
    newOrder?: Array<string>;
};
