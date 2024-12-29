/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ import type { ListArchivedUsersRespDto } from "./ListArchivedUsersRespDto";
export type ArchivedUsersListPagingDto = {
  /** *Total number of records */ totalCount: number;
  /** *Response data */ list: Array<ListArchivedUsersRespDto>;
};
