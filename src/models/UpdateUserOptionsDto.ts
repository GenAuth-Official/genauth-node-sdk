/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SendResetPasswordNotificationDto } from "./SendResetPasswordNotificationDto";

export type UpdateUserOptionsDto = {
  /**
   * User ID type, default value is `user_id`, optional value is:
   * - `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`
   * - `phone`: user phone number
   * - `email`: user email
   * - `username`: user name
   * - `external_id`: user ID in the external system, corresponding to the `externalId` field of GenAuth user information
   * - `identity`: user's external identity source information, format is `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the ID of the user in the external identity source.
   * Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`.
   * - `sync_relation`: The user's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the synchronization identity source type, such as wechatwork, lark; `<userIdInIdp>` is the ID of the user in the external identity source.
   * Example value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`.
   *
   */
  userIdType?: UpdateUserOptionsDto.userIdType;
  /**
   * Set the requirement to reset the password for the user's first login
   */
  resetPasswordOnFirstLogin?: boolean;
  /**
   * Require the user to reset the password for the next login
   */
  resetPasswordOnNextLogin?: boolean;
  /**
   * Password encryption type, supports encryption using RSA256 and the national encryption SM2 algorithm. The default is `none`, no encryption.
   * - `none`: Do not encrypt the password, use plain text for transmission.
   * - `rsa`: Use the RSA256 algorithm to encrypt the password, which requires the RSA public key of the GenAuth service to encrypt. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the GenAuth service.
   * - `sm2`: Use [National Encryption SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the SM2 public key of the GenAuth service.
   *
   */
  passwordEncryptType?: UpdateUserOptionsDto.passwordEncryptType;
  /**
   * Whether to automatically generate a password
   */
  autoGeneratePassword?: boolean;
  /**
   * Options for sending email and mobile phone number when resetting password
   */
  sendPasswordResetedNotification?: SendResetPasswordNotificationDto;
};

export namespace UpdateUserOptionsDto {
  /**
   * User ID type, default value is `user_id`, optional value is:
   * - `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`
   * - `phone`: user mobile phone number
   * - `email`: user mailbox
   * - `username`: user name
   * - `external_id`: user ID in the external system, corresponding to the `externalId` field of GenAuth user information
   * - `identity`: user's external identity source information, format is `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the ID of the user in the external identity source.
   * Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`.
   * - `sync_relation`: The user's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the synchronization identity source type, such as wechatwork, lark; `<userIdInIdp>` is the ID of the user in the external identity source.
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
   * Password encryption type, supports encryption using RSA256 and SM2 algorithms. The default is `none`, no encryption.
   * - `none`: Do not encrypt the password, use plain text for transmission.
   * - `rsa`: Use the RSA256 algorithm to encrypt the password. You need to use the RSA public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the GenAuth service.
   * - `sm2`: Use the [National Secret SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the SM2 public key of the GenAuth service.
   *
   */
  export enum passwordEncryptType {
    SM2 = "sm2",
    RSA = "rsa",
    NONE = "none",
  }
}
