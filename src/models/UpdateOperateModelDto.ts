/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateOperateModelDto = {
    /**
     * icon
     */
    icon: string;
    /**
     * Operation configuration
     */
    config: any;
    /**
     * Operation name
     */
    operateName: string;
    /**
     * Operation Key value
     */
    operateKey: string;
    /**
     * Whether to display:
     * - true: display
     * - true: do not display
     *
     */
    show: boolean;
    /**
     *modelId
     */
    modelId: string;
    /**
     *id
     */
    id: string;
    /**
     *Related field id
     */
    fieldId?: string;
};
