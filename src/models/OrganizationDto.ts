/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationNameI18nDto } from './OrganizationNameI18nDto';

export type OrganizationDto = {
    /**
     *Organization code
     */
    organizationCode: string;
    /**
     *Organization name
     */
    organizationName: string;
    /**
     * Organization description information
     */
    description?: string;
    /**
     * Creation time
     */
    createdAt?: string;
    /**
     * Modification time
     */
    updatedAt?: string;
    /**
     * Root node ID
     */
    departmentId: string;
    /**
     *Root node custom ID
     */
    openDepartmentId?: string;
    /**
     * Whether to contain child nodes
     */
    hasChildren: boolean;
    /**
     * Department head ID
     */
    leaderUserIds?: Array<string>;
    /**
     * Number of people in the department
     */
    membersCount: number;
    /**
     * Whether it is a virtual department
     */
    isVirtualNode: boolean;
    /**
     *Multi-language settings
     */
    i18n?: OrganizationNameI18nDto;
    /**
     * Extended field data of department
     */
    customData?: any;
    /**
     * Tenant ID
     */
    tenantId?: string;
    /**
     * Position id list
     */
    postIdList?: Array<string>;
    /**
     * state
     */
    status?: string;
    /**
     * Access restrictions
     */
    allow?: string;
};
