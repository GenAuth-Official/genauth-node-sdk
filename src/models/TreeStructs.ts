/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TreeStructs = {
    /**
     * Tree resource node Code, unique at the same level
     */
    code: string;
    /**
     * Tree resource node name, unique at the same level
     */
    name: string;
    /**
     * Tree resource node Value
     */
    value?: string;
    /**
     * Tree data resource policy node actions
     */
    actions?: Array<string>;
    /**
     * Sub-node data, sub-node data can have up to five levels
     */
    children?: Array<TreeStructs>;
};
