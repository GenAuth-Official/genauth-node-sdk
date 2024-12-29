/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NamespaceRolesListRespDto = {
    /**
     * Role ID
     */
    id: string;
    /**
     *Character name
     */
    name: string;
    /**
     * Role Code
     */
    code: string;
    /**
     * Role description information
     */
    description?: string;
    /**
     * Permission grouping code
     */
    namespace: string;
    /**
     * Update time
     */
    updatedAt: string;
};
