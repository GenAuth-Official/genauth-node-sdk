/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateGroupReqDto = {
    /**
     *Group description
     */
    description: string;
    /**
     * group code
     */
    code: string;
    /**
     * Group name
     */
    name?: string;
    /**
     * Group new code
     */
    newCode?: string;
    /**
     * Custom data, the key in the object passed in must first define the relevant custom fields in the user pool
     */
    customData?: any;
};
