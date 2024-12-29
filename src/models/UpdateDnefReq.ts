/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Config } from './Config';

export type UpdateDnefReq = {
    /**
     * Unique identification of the field, length 1-64 characters, only allowed to contain English letters, numbers, underscore _, dollar sign $
     */
    key: string;
    /**
     * Data resource Code, unique in the permission space
     */
    resourceCode: string;
    /**
     * The permission space code to which the data resource belongs
     */
    namespaceCode: string;
    /**
     * describe
     */
    description?: string;
    /**
     * Display name
     */
    label?: string;
    /**
     * Field configuration, when valueType=SELECT, this parameter must be passed, otherwise it does not need to be passed
     */
    config?: Config;
};
