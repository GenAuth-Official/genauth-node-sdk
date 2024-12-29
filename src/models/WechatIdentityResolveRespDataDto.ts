/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WechatIdentityResolveRespDataDto = {
    /**
     * Optional account binding method.
     */
    methods?: Array<string>;
    /**
     * Optional account list.
     */
    accounts?: Array<string>;
    /**
     * Authentication intermediate state.
     */
    key: string;
};
