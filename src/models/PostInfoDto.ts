/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PostInfoDto = {
    /**
     *Position ID
     */
    id?: string;
    /**
     *Position code
     */
    code: string;
    /**
     *Position name
     */
    name: string;
    /**
     *Job description
     */
    description?: string;
    /**
     * Number of departments related to the position
     */
    departmentIdList: Array<string>;
};
