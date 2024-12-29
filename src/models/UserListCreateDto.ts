/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserListCreateDto = {
    /**
     * Expiration time
     */
    expireAt: number;
    /**
     * Restriction type, FORBID_LOGIN - prohibit login, FORBID_REGISTER - prohibit registration, SKIP_MFA - skip MFA
     */
    limitList: Array<string>;
    /**
     * Deletion type, MANUAL-manual, SCHEDULE-strategic deletion
     */
    removeType: string;
    /**
     * Add type, MANUAL-manual, SCHEDULE-strategy addition
     */
    addType: string;
    /**
     * User list type, WHITE-whitelist, BLACK-blacklist
     */
    userListType: string;
    /**
     * userId, multiple userIds separated by commas
     */
    userIds: Array<string>;
};
