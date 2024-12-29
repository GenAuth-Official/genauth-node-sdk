/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RemoveRelationValueDto = {
    /**
     * Linked data
     */
    value: string;
    /**
     * field id
     */
    fieldIds: Array<string>;
    /**
     * row id
     */
    rowId: string;
    /**
     * function id
     */
    modelId: string;
};
