/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SetPublicAccountBatchReqDto = {
    /**
     * The user's unique identifier can be user ID, username, email, mobile phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. Defaults to user id.
     */
    publicAccountId: string;
    /**
     * User ID array
     */
    userIds: Array<string>;
};
