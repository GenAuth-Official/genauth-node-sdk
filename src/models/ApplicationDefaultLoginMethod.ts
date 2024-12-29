/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplicationDefaultLoginMethod = {
  /**
   * Default login type
   * - `PASSWORD`: Password type, depending on the basic login method you enable, supports mobile phone number/email/user name + password for login
   * - `PASSCODE`: Verification code type, depending on the basic login method you enable, supports mobile phone number/email + verification code for login
   * - `QRCODE`: Scan code login type, currently including self-built APP scan code login, WeChat public account scan code login, WeChat mini program scan code login three types
   *
   */
  connectionType: ApplicationDefaultLoginMethod.connectionType;
  /**
   * When `connectionType` is `QRCODE`, this parameter indicates the QR code type
   * - `SELF_BUILT_APP`: Scan the QR code of self-built APP
   * - `WECHAT_OFFICIAL_ACCOUNT`: Scan the QR code to follow the WeChat official account to log in
   * - `WECHAT_MINI_PROGRAM`: Scan the QR code to log in to the WeChat mini program
   *
   */
  qrcodeType: ApplicationDefaultLoginMethod.qrcodeType;
  /**
   * When `connectionType` is `QRCODE`, you need to specify the ID of the specific scan code login identity source connection through this parameter.
   */
  qrcodeExtIdpConnId: string;
  /**
   * When `connectionType` is `AD`, you need to specify the ID of the specific AD identity source connection through this parameter.
   */
  adExtIdpConnId: string;
  /**
   * When `connectionType` is `LDAP`, you need to specify the ID of the specific LDAP identity source connection through this parameter.
   */
  ldapExtIdpConnId: string;
};

export namespace ApplicationDefaultLoginMethod {
  /**
   * Default login type
   * - `PASSWORD`: Password type, depends on the basic login method you enable, supports mobile phone number/email/user name + password for login
   * - `PASSCODE`: Verification code type, depends on the basic login method you enable, supports mobile phone number/email + verification code for login
   * - `QRCODE`: Scan code login type, currently includes three types: scan code login for self-built APP, scan code login for WeChat public account, and scan code login for WeChat applet
   *
   */
  export enum connectionType {
    PASSCODE = "PASSCODE",
    PASSWORD = "PASSWORD",
    QRCODE = "QRCODE",
    LDAP = "LDAP",
    AD = "AD",
  }

  /**
   * When `connectionType` is `QRCODE`, this parameter indicates the QR code type.
   * - `SELF_BUILT_APP`: Scan the QR code of self-built APP
   * - `WECHAT_OFFICIAL_ACCOUNT`: Scan the QR code to follow the WeChat official account to log in
   * - `WECHAT_MINI_PROGRAM`: Scan the QR code to log in to the WeChat mini program
   *
   */
  export enum qrcodeType {
    SELF_BUILT_APP = "SELF_BUILT_APP",
    WECHAT_OFFICIAL_ACCOUNT = "WECHAT_OFFICIAL_ACCOUNT",
    WECHAT_MINI_PROGRAM = "WECHAT_MINI_PROGRAM",
  }
}
