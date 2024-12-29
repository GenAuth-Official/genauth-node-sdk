/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ import type { MultipleTenantAdminDto } from "./MultipleTenantAdminDto";
export type MultipleTenantAdminListPagingDto = {
  /** *Total number of records */ totalCount: number;
  /** *Response data */ list: Array<MultipleTenantAdminDto>;
};
