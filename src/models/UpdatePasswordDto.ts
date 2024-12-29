/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdatePasswordDto = {
  /**
   * New Password
   */
  newPassword: string;
  /**
   * Original password, if the user currently sets a password, this parameter is required.
   */
  oldPassword?: string;
  /**
   * Password encryption type, supports encryption using RSA256 and national secret SM2 algorithms. Default is `none` to not encrypt.
   * - `none`: Do not encrypt the password and use clear text for transmission.
   * - `rsa`: Use the RSA256 algorithm to encrypt the password. You need to use the RSA public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the GenAuth service.
   * - `sm2`: Use [National Secret SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the GenAuth service for encryption, please read** Learn how to obtain the SM2 public key of the GenAuth service in the introduction** section.
   *
   */
  passwordEncryptType?: UpdatePasswordDto.passwordEncryptType;
  /**
   * The token for resetting the password can be obtained through the `/api/v3/verify-reset-password-request` interface
   */
  passwordResetToken?: string;
};

export namespace UpdatePasswordDto {
  /**
   * Password encryption type, supports encryption using RSA256 and national secret SM2 algorithms. Default is `none` to not encrypt.
   * - `none`: Do not encrypt the password and use clear text for transmission.
   * - `rsa`: Use the RSA256 algorithm to encrypt the password. You need to use the RSA public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the GenAuth service.
   * - `sm2`: Use [National Secret SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the GenAuth service for encryption, please read** Learn how to obtain the SM2 public key of the GenAuth service in the introduction** section.
   *
   */
  export enum passwordEncryptType {
    SM2 = "sm2",
    RSA = "rsa",
    NONE = "none",
  }
}
