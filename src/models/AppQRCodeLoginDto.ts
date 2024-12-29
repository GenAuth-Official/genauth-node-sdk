/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AppQRCodeLoginDto = {
  /**
   * APP scans QR code to log in:
   * - `APP_LOGIN`: APP scans code to log in;
   *
   */
  action: AppQRCodeLoginDto.action;
  /**
   * QR code unique ID
   */
  qrcodeId: string;
};

export namespace AppQRCodeLoginDto {
  /**
   * APP scans QR code to log in:
   * - `APP_LOGIN`: APP scans code to log in;
   *
   */
  export enum action {
    APP_LOGIN = "APP_LOGIN",
  }
}
