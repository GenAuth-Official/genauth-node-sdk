/*istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SortingDto = {
    /**
     * Field for sorting, optional values are:
     * - `createdAt`: Creation time
     * - `updatedAt`: modification time
     * - `email`: email
     * - `phone`: mobile phone number
     * - `username`: username
     * - `externalId`: external ID
     * - `status`: public account status
     * - `statusChangedAt`: status modification time
     * - `passwordLastSetAt`: password change time
     * - `loginsCount`: Number of logins
     * - `gender`: gender
     * - `lastLogin`: last login time
     * - `userSourceType`: public account registration source
     * - `lastMfaTime`: Last MFA authentication time
     * - `passwordSecurityLevel`: password security level
     * - `phoneCountryCode`: mobile phone area code
     * - `lastIp`: IP used during last login
     *
     */
    field: SortingDto.field;
    /**
     * Sort order:
     * - `desc`: In descending order from large to small.
     * - `asc`: In ascending order from small to large.
     *
     */
    order: SortingDto.order;
};

export namespace SortingDto {

    /**
     * Field for sorting, optional values are:
     * - `createdAt`: Creation time
     * - `updatedAt`: modification time
     * - `email`: email
     * - `phone`: mobile phone number
     * - `username`: username
     * - `externalId`: external ID
     * - `status`: public account status
     * - `statusChangedAt`: status modification time
     * - `passwordLastSetAt`: password change time
     * - `loginsCount`: Number of logins
     * - `gender`: gender
     * - `lastLogin`: last login time
     * - `userSourceType`: public account registration source
     * - `lastMfaTime`: Last MFA authentication time
     * - `passwordSecurityLevel`: password security level
     * - `phoneCountryCode`: mobile phone area code
     * - `lastIp`: IP used during last login
     *
     */
    export enum field {
        ID = 'id',
        CREATED_AT = 'createdAt',
        UPDATED_AT = 'updatedAt',
        EMAIL = 'email',
        USERNAME = 'username',
        EXTERNAL_ID = 'externalId',
        PHONE = 'phone',
        STATUS = 'status',
        STATUS_CHANGED_AT = 'statusChangedAt',
        PASSWORD_LAST_SET_AT = 'passwordLastSetAt',
        LOGINS_COUNT = 'loginsCount',
        GENDER = 'gender',
        LAST_LOGIN = 'lastLogin',
        USER_SOURCE_TYPE = 'userSourceType',
        LAST_MFA_TIME = 'lastMfaTime',
        PASSWORD_SECURITY_LEVEL = 'passwordSecurityLevel',
        PHONE_COUNTRY_CODE = 'phoneCountryCode',
        LAST_IP = 'lastIp',
    }

    /**
     * Sort order:
     * - `desc`: In descending order from large to small.
     * - `asc`: In ascending order from small to large.
     *
     */
    export enum order {
        DESC = 'desc',
        ASC = 'asc',
    }


}
