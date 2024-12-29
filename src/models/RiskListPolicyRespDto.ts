/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RiskListPolicyRespDto = {
    /**
     *ID
     */
    id: string;
    /**
     * Policy operation object, currently only IP
     */
    optObject: RiskListPolicyRespDto.optObject;
    /**
     * The range of operating IP, ALL - all, NOT_IN_WHITE_LIST - not in the whitelist, choose one of the two or userRange
     */
    ipRange: RiskListPolicyRespDto.ipRange;
    /**
     * Operating range of USER, ALL - all, NOT_IN_WHITE_LIST - not in the whitelist, choose one of the two or ipRange
     */
    userRange: RiskListPolicyRespDto.userRange;
    /**
     * IP conditions, NO_LIMIT-no limit, ONE-single IP, and userCond, choose one of the two
     */
    ipCond: RiskListPolicyRespDto.ipCond;
    /**
     * IP conditions, NO_LIMIT-no limit, ONE-single user, and ipCond, choose one of the two
     */
    userCond: RiskListPolicyRespDto.userCond;
    /**
     * Time range, how many recent minutes
     */
    timeRange: number;
    /**
     *Number of times threshold
     */
    countThr: number;
    /**
     * Event status type, password_wrong-wrong password, account_wrong-wrong account number
     */
    eventStateType: RiskListPolicyRespDto.eventStateType;
    /**
     * Remove type, MANUAL-manual, SCHEDULE-strategy, currently only manual
     */
    removeType: RiskListPolicyRespDto.removeType;
    /**
     * Policy action, ADD_IP_BLACK_LIST-add IP blacklist, ADD_USER_BLACK_LIST-add user blacklist
     */
    action: RiskListPolicyRespDto.action;
    /**
     * List of restriction types, FORBID_LOGIN - login is prohibited, FORBID_REGISTER - registration is prohibited
     */
    limitList: RiskListPolicyRespDto.limitList;
    /**
     *Creation time,
     */
    createdAt: string;
};

export namespace RiskListPolicyRespDto {

    /**
     * Policy operation object, currently only IP
     */
    export enum optObject {
        IP = 'IP',
        USER = 'USER',
    }

    /**
     * The range of operating IP, ALL-all, NOT_IN_WHITE_LIST-not in the whitelist, choose one of the two or userRange
     */
    export enum ipRange {
        ALL = 'ALL',
        NOT_IN_WHITE_LIST = 'NOT_IN_WHITE_LIST',
    }

    /**
     * Operating range of USER, ALL - all, NOT_IN_WHITE_LIST - not in the whitelist, choose one of the two or ipRange
     */
    export enum userRange {
        ALL = 'ALL',
        NOT_IN_WHITE_LIST = 'NOT_IN_WHITE_LIST',
    }

    /**
     * IP conditions, NO_LIMIT-no limit, ONE-single IP, and userCond, choose one of the two
     */
    export enum ipCond {
        NO_LIMIT = 'NO_LIMIT',
        ONE = 'ONE',
    }

    /**
     * IP conditions, NO_LIMIT-no limit, ONE-single user, choose one of ipCond
     */
    export enum userCond {
        NO_LIMIT = 'NO_LIMIT',
        ONE = 'ONE',
    }

    /**
     * Event status type, password_wrong-wrong password, account_wrong-wrong account number
     */
    export enum eventStateType {
        PASSWORD_WRONG = 'password_wrong',
        ACCOUNT_WRONG = 'account_wrong',
    }

    /**
     * Remove type, MANUAL-manual, SCHEDULE-strategy, currently only manual
     */
    export enum removeType {
        MANUAL = 'MANUAL',
        SCHEDULE = 'SCHEDULE',
    }

    /**
     * Policy action, ADD_IP_BLACK_LIST-add IP blacklist, ADD_USER_BLACK_LIST-add user blacklist
     */
    export enum action {
        ADD_IP_BLACK_LIST = 'ADD_IP_BLACK_LIST',
        ADD_USER_BLACK_LIST = 'ADD_USER_BLACK_LIST',
    }

    /**
     * List of restriction types, FORBID_LOGIN - login is prohibited, FORBID_REGISTER - registration is prohibited
     */
    export enum limitList {
        FORBID_LOGIN = 'FORBID_LOGIN',
        FORBID_REGISTER = 'FORBID_REGISTER',
    }


}
