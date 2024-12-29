/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OperateModelDto = {
    /**
     * operation id
     */
    id: string;
    /**
     *User pool id
     */
    userPoolId: string;
    /**
     * function id
     */
    modelId: string;
    /**
     * Operation name
     */
    operateName: string;
    /**
     * Operation method key
     */
    operateKey: string;
    /**
     * Whether to display:
     * - true: display
     * - false: do not display
     *
     */
    show: boolean;
    /**
     * Whether it is the default operation:
     * - true is the default action
     * - fasle is not the default operation
     *
     */
    isDefault: boolean;
    /**
     * Creation time
     */
    createdAt: string;
    /**
     * Update time
     */
    updatedAt: string;
};
