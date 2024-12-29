/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SetCustomDataDto = {
    /**
     * Tenant ID
     */
    tenantId?: string;
    /**
     * Field key cannot conflict with the key of the built-in field
     */
    key: string;
    /**
     * Custom data can be of any type, but it must match the custom field type defined when creating, otherwise the setting will fail.
     */
    value: string;
};
