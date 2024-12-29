/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateApplicationPermissionStrategyDataDto = {
    /**
     * Apply access authorization policy
     */
    permissionStrategy: UpdateApplicationPermissionStrategyDataDto.permissionStrategy;
    /**
     * Application ID
     */
    appId: string;
};

export namespace UpdateApplicationPermissionStrategyDataDto {

    /**
     * Apply access authorization policy
     */
    export enum permissionStrategy {
        ALLOW_ALL = 'ALLOW_ALL',
        DENY_ALL = 'DENY_ALL',
    }


}
