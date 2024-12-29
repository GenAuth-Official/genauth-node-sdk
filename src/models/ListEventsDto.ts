/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get a list of all events supported by the GenAuth service
 */
export type ListEventsDto = {
  /**
   * Current page number, starting from 1
   */
  page?: any;
  /**
   * The number of pages per page cannot exceed 50, and the default is 10
   */
  limit?: any;
  /**
   *Application type
   */
  app?: any;
};
