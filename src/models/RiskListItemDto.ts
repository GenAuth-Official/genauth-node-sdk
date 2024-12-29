/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RiskListItemDto = {
    /**
     *ID
     */
    id: string;
    /**
     * userId
     */
    userId: string;
    /**
     * Add type, MANUAL-manual, SCHEDULE-strategy addition
     */
    addType: string;
    /**
     * ip type, WHITE-whitelist, BLACK-blacklist
     */
    userListType: string;
    /**
     * Deletion type, MANUAL-manual, SCHEDULE-strategic deletion
     */
    removeType: string;
    /**
     * Restriction type, FORBID_LOGIN - prohibit login, FORBID_REGISTER - prohibit registration, SKIP_MFA - skip MFA
     */
    limitList: Array<string>;
    /**
     *Add time
     */
    addAt: string;
};
