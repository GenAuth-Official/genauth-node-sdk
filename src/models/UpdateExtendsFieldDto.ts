/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppValidateRuleDto } from './AppValidateRuleDto';
import type { CustomFieldI18n } from './CustomFieldI18n';

export type UpdateExtendsFieldDto = {
    /**
     *Field type
     * - `internal`: user built-in fields
     * - `user`: user extension field
     */
    type: UpdateExtendsFieldDto.type;
    /**
     * Field ID, required if the field type is `user` and `metadata`
     */
    id: string;
    /**
     *Field name
     */
    name: string;
    /**
     * Field display name
     */
    label: string;
    /**
     * Whether to display
     */
    show: boolean;
    /**
     * Whether to allow users to overwrite
     */
    allowRewrite: boolean;
    /**
     * Field data type (refer to extended field configuration for details)
     * - `number`: array
     * - `datetime`: date
     * - `select`: enumeration
     * - `boolean`: Boolean value
     * - `string`: string
     */
    inputType: UpdateExtendsFieldDto.inputType;
    /**
     * Is it required?
     */
    required?: boolean;
    /**
     * Verification rules
     */
    validateRules?: AppValidateRuleDto;
    /**
     *Multi-language display name
     */
    i18n?: CustomFieldI18n;
};

export namespace UpdateExtendsFieldDto {

    /**
     *Field type
     * - `internal`: user built-in fields
     * - `user`: user extension field
     */
    export enum type {
        USER = 'user',
        INTERNAL = 'internal',
    }

    /**
     * Field data type (refer to extended field configuration for details)
     * - `number`: array
     * - `datetime`: date
     * - `select`: enumeration
     * - `boolean`: Boolean value
     * - `string`: string
     */
    export enum inputType {
        IMAGE = 'image',
        NUMBER = 'number',
        DATE = 'date',
        DATE_TIME = 'dateTime',
        DATETIME = 'datetime',
        SELECT = 'select',
        DROPDOWN = 'dropdown',
        BOOLEAN = 'boolean',
        STRING = 'string',
        TEXT = 'text',
        GENDER = 'gender',
        COUNTRY = 'country',
        USERNAME = 'username',
        PHONE = 'phone',
        EMAIL = 'email',
    }


}
