/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateRowDto = {
    /**
     * Data content
     */
    data: any;
    /**
     * row id
     */
    rowId: string;
    /**
     * function id
     */
    modelId: string;
    /**
     * Whether the key in the response is FieldId
     */
    showFieldId?: boolean;
};
