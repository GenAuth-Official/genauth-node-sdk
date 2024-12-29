/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TargetDto } from './TargetDto';

export type RevokeRoleDto = {
    /**
     * Remove the character's target
     */
    targets: Array<TargetDto>;
    /**
     * The unique identifier of the role within the permission group
     */
    code: string;
    /**
     * The code of the permission group it belongs to
     */
    namespace?: string;
};
