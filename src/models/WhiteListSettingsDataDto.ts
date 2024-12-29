/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WhiteListSettingsDataDto = {
    /**
     * Subject ID
     */
    id: string;
    /**
     * Subject type:
     * - `USER`: user
     * - `GROUP`: user group
     * - `ROLE`: role
     *
     */
    targetType: WhiteListSettingsDataDto.targetType;
};

export namespace WhiteListSettingsDataDto {

    /**
     * Subject type:
     * - `USER`: user
     * - `GROUP`: user group
     * - `ROLE`: role
     *
     */
    export enum targetType {
        USER = 'USER',
        GROUP = 'GROUP',
        ROLE = 'ROLE',
    }


}
