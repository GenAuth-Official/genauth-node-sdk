/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleCodeDto } from './RoleCodeDto';
import type { TargetDto } from './TargetDto';

export type RevokeRoleBatchDto = {
    /**
     * Remove the character's target list
     */
    targets: Array<TargetDto>;
    /**
     * Role information list
     */
    roles: Array<RoleCodeDto>;
};
