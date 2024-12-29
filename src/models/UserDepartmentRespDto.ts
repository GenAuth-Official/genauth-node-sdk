/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DepartmentI18nDto } from './DepartmentI18nDto';

export type UserDepartmentRespDto = {
    /**
     * Organization Code (organizationCode)
     */
    organizationCode: string;
    /**
     *Department ID
     */
    departmentId: string;
    /**
     * Whether it is the root department
     */
    isRoot: boolean;
    /**
     * Department creation time
     */
    createdAt: string;
    /**
     *Department name
     */
    name: string;
    /**
     * Department description
     */
    description: string;
    /**
     * Custom department ID, used to store customized IDs
     */
    openDepartmentId?: string;
    /**
     * Whether you are a department leader
     */
    isLeader: boolean;
    /**
     *Department identification code
     */
    code: string;
    /**
     * Whether it is the main department
     */
    isMainDepartment: boolean;
    /**
     *Add department time
     */
    joinedAt: string;
    /**
     * Whether it is a virtual department
     */
    isVirtualNode: boolean;
    /**
     *Multi-language settings
     */
    i18n?: DepartmentI18nDto;
    /**
     * Extended field data of department
     */
    customData?: any;
    /**
     * Department ID path
     */
    departmentIdPath?: Array<string>;
    /**
     * Department Code path
     */
    departmentCodePath?: Array<string>;
    /**
     * Department name path
     */
    departmentNamePath?: Array<string>;
};
