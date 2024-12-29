/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Check whether the data resource name or Code is valid in the permission space. By using the data resource name or data resource Code and the permission space Code to which it belongs, determine whether it is available in the specified permission space.
 *
 * ### Data resource code valid example
 *
 * - Input
 *
 * ```json
 * {
 * "namespaceCode": "examplePermissionNamespace",
 * "resourceCode": "test"
 * }
 * ```
 *
 * - Output
 *
 * ```json
 * {
 * "statusCode": 200,
 * "message": "Operation successful",
 * "apiCode": 0,
 * "data": {
 * "isValid": "true"
 * }
 * }
 * ```
 *
 * ### Data resource name valid example
 *
 * - Input
 *
 * ```json
 * {
 * "namespaceCode": "examplePermissionNamespace",
 * "resourceName": "test"
 * }
 * ```
 *
 * - Output
 *
 * ```json
 * {
 * "statusCode": 200,
 * "message": "Operation successful",
 * "apiCode": 0,
 * "data": {
 * "isValid": "true"
 * }
 * }
 * ```
 *
 * ### Data resource Code invalid example
 *
 * - Input parameter
 *
 * ```json
 * {
 * "namespaceCode": "examplePermissionNamespace",
 * "resourceCode": "test"
 * }
 * ```
 *
 * - Output parameter
 *
 * ```json
 * {
 * "statusCode": 200,
 * "message": "Operation successful",
 * "apiCode": 0,
 * "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
 * "data": {
 * "isValid": "false",
 * "message": "data resource code already exist"
 * }
 * }
 * ```
 *
 */
export type CheckDataResourceExistsDto = {
  /**
   * The permission space Code to which the data resource belongs
   */
  namespaceCode?: any;
  /**
   * Data resource name, unique in the permission space
   */
  resourceName?: any;
  /**
   * Data resource Code, unique in the permission space
   */
  resourceCode?: any;
};
