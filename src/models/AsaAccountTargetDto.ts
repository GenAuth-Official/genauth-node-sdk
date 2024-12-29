/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AsaAccountTargetDto = {
  /**
   * Target object type:
   * - `USER`: user
   * - `ROLE`: role
   * - `GROUP`: group
   * - `DEPARTMENT`: department
   *
   */
  targetType: AsaAccountTargetDto.targetType;
  /**
   * Unique identifier of the target object:
   * - If it is a user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`
   * - If it is a role, it is the role code, such as `admin`
   * - If it is a group, it is the group code, such as `developer`
   * - If it is a department, it is the department ID, such as `6343bafc019xxxx889206c4c`
   *
   */
  targetIdentifier: string;
};

export namespace AsaAccountTargetDto {
  /**
   * Target object type:
   * - `USER`: user
   * - `ROLE`: role
   * - `GROUP`: group
   * - `DEPARTMENT`: department
   *
   */
  export enum targetType {
    USER = "USER",
    ROLE = "ROLE",
    GROUP = "GROUP",
    DEPARTMENT = "DEPARTMENT",
  }
}
