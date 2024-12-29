/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CellDto } from "./CellDto";

export type RowDto = {
  /**
   * Row id
   */
  rowId: string;
  /**
   * Cell list
   */
  cellList: Array<CellDto>;
};
