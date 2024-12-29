/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SetUserDepartmentDto } from './SetUserDepartmentDto';
import type { SetUserDepartmentsOptionsDto } from './SetUserDepartmentsOptionsDto';

export type SetUserDepartmentsDto = {
    /**
     * The user's unique identifier can be user ID, username, email, mobile phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. Defaults to user id.
     */
    userId: string;
    /**
     * Department information
     */
    departments: Array<SetUserDepartmentDto>;
    /**
     * Optional parameters
     */
    options?: SetUserDepartmentsOptionsDto;
};
