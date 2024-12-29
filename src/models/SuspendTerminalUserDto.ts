/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SuspendTerminalUserDto = {
    /**
     *Pending expiration time, timestamp (milliseconds)
     */
    endTime: string;
    /**
     *User ID
     */
    userId: string;
    /**
     * Data row id, `id` returned when creating the device
     */
    id: string;
};
