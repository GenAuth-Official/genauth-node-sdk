/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TreeAuthBo = {
    /**
     *Tree resource node path
     */
    nodePath: string;
    /**
     * Tree resource node name
     */
    nodeName: string;
    /**
     * Tree resource node operation permission list
     */
    nodeActions: Array<string>;
    /**
     * Tree resource node Value
     */
    nodeValue?: string;
    /**
     * Tree resource node extended field value
     */
    nodeExtendFieldValue?: any;
};
