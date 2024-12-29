/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RemoveRowDto = {
    /**
     * row id
     */
    rowIdList: Array<string>;
    /**
     * function id
     */
    modelId: string;
    /**
     * If the current row has child nodes, whether to delete them recursively, the default is false. When false, if there are child nodes, an error will be prompted.
     */
    recursive?: boolean;
};
