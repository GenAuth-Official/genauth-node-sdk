/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListPublicAccountDataDto = {
    /**
     *Account ID
     */
    userId: string;
    /**
     * Account avatar
     */
    avatar?: string;
    /**
     * display name
     */
    displayName?: string;
    /**
     * User type: 1 individual user, 2 public account
     */
    usertype?: ListPublicAccountDataDto.usertype;
};

export namespace ListPublicAccountDataDto {

    /**
     * User type: 1 individual user, 2 public account
     */
    export enum usertype {
        _1 = '1',
        _2 = '2',
    }


}
