/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupBo } from './GroupBo';
import type { NodeBo } from './NodeBo';
import type { PolicyBo } from './PolicyBo';
import type { RoleBo } from './RoleBo';

export type ListPermissionViewRespDto = {
    /**
     * The user's unique identifier can be user ID, username, email, mobile phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. Defaults to user id.
     */
    userId: string;
    /**
     * User’s real name, not unique
     */
    username?: string;
    /**
     * Permission space id
     */
    namespaceId: string;
    /**
     * Permission space Code
     */
    namespaceCode: string;
    /**
     * Permission space name
     */
    namespaceName: string;
    /**
     * Data resource id
     */
    dataResourceId: string;
    /**
     * Data resource code
     */
    dataResourceCode: string;
    /**
     * Data resource name
     */
    dataResourceName: string;
    /**
     * Data strategy list
     */
    dataPolicyList: Array<PolicyBo>;
    /**
     * Role list
     */
    roleList: Array<RoleBo>;
    /**
     * User group list
     */
    groupList: Array<GroupBo>;
    /**
     * List of organizations
     */
    nodeList: Array<NodeBo>;
};
