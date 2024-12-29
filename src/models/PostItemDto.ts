/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PostItemDto = {
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
     * The number of users associated with the position, which only exists when skipCount is not true.
     */
    userCount: number;
    /**
     * Number of departments associated with the position, only exists when skipCount is not true
     */
    departmentCount: number;
    /**
     * Position metadata information
     */
    metadataSource: Array<string>;
};
