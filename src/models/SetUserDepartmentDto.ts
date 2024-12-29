/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SetUserDepartmentDto = {
    /**
     *Department id
     */
    departmentId: string;
    /**
     * Whether you are a department leader
     */
    isLeader?: boolean;
    /**
     * Whether it is the main department
     */
    isMainDepartment?: boolean;
};
