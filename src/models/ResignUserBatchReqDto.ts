/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResignUserBatchReqDto = {
  /**
   * User ID array
   */
  userIds: Array<string>;
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
  userIdType?: ResignUserBatchReqDto.userIdType;
};

export namespace ResignUserBatchReqDto {
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
}
