/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SendResetPasswordNotificationDto } from "./SendResetPasswordNotificationDto";

export type UpdatePublicAccountOptionsDto = {
  /**
   * User ID type, the default value is `user_id`, the optional values are:
   * - `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`
   * - `phone`: user’s mobile phone number
   * - `email`: user email
   * - `username`: username
   * - `external_id`: the user's ID in the external system, corresponding to the `externalId` field of GenAuth user information
   * - `identity`: The user's external identity source information, in the format of `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, `<userIdInIdp>` is the user's external identity source ID.
   * Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`.
   * - `sync_relation`: The user's external identity source information in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the synchronization identity source type, such as wechatwork, lark; `<userIdInIdp>` is the user's The ID of the external identity source.
   * Example value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`.
   *
   */
  userIdType?: UpdatePublicAccountOptionsDto.userIdType;
  /**
   * Set the user to require a password reset when logging in for the first time
   */
  resetPasswordOnFirstLogin?: boolean;
  /**
   * Password reset required for next login
   */
  resetPasswordOnNextLogin?: boolean;
  /**
   * Password encryption type, supports encryption using RSA256 and national secret SM2 algorithms. Default is `none` to not encrypt.
   * - `none`: Do not encrypt the password and use clear text for transmission.
   * - `rsa`: Use the RSA256 algorithm to encrypt the password. You need to use the RSA public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the GenAuth service.
   * - `sm2`: Use [National Secret SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the GenAuth service for encryption, please read** Learn how to obtain the SM2 public key of the GenAuth service in the introduction** section.
   *
   */
  passwordEncryptType?: UpdatePublicAccountOptionsDto.passwordEncryptType;
  /**
   * Whether to automatically generate a password
   */
  autoGeneratePassword?: boolean;
  /**
   * Reset password, send email and mobile phone number options
   */
  sendPasswordResetedNotification?: SendResetPasswordNotificationDto;
};

export namespace UpdatePublicAccountOptionsDto {
  /**
   * User ID type, the default value is `user_id`, the optional values are:
   * - `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`
   * - `phone`: user’s mobile phone number
   * - `email`: user email
   * - `username`: username
   * - `external_id`: the user's ID in the external system, corresponding to the `externalId` field of GenAuth user information
   * - `identity`: The user's external identity source information, in the format of `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, `<userIdInIdp>` is the user's external identity source ID.
   * Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`.
   * - `sync_relation`: The user's external identity source information in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the synchronization identity source type, such as wechatwork, lark; `<userIdInIdp>` is the user's The ID of the external identity source.
   * Example value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`.
   *
   */
  export enum userIdType {
    USER_ID = "user_id",
    EXTERNAL_ID = "external_id",
    PHONE = "phone",
    EMAIL = "email",
    USERNAME = "username",
    IDENTITY = "identity",
    SYNC_RELATION = "sync_relation",
    CUSTOM_FIELD = "custom_field",
  }

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
