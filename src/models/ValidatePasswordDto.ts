/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ValidatePasswordDto = {
  /**
   * Phone number without area code. If it is a foreign phone number, please specify the area code in the phoneCountryCode parameter.
   */
  phone?: string;
  /**
   * Email address, case-insensitive
   */
  email?: string;
  /**
   * Username, unique in the user pool
   */
  username?: string;
  /**
   * Phone area code, optional for mainland China phone numbers. The GenAuth SMS service does not currently support international phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of phone area codes, see https://en.wikipedia.org/wiki/List_of_country_calling_codes.
   */
  phoneCountryCode?: string;
  /**
   * User password, plain text by default. We use the HTTPS protocol to securely transmit passwords, which can ensure security to a certain extent. If you need a higher level of security, we also support RSA256 and SM2 to encrypt passwords. See the `passwordEncryptType` parameter for details.
   */
  password?: string;
  /**
   * Password encryption type, supports encryption using RSA256 and SM2 algorithms. The default is `none`, no encryption.
   * - `none`: Do not encrypt the password, use plain text for transmission.
   * - `rsa`: Use the RSA256 algorithm to encrypt the password, which requires the RSA public key of the GenAuth service to encrypt. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the GenAuth service.
   * - `sm2`: Use [National Encryption SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the SM2 public key of the GenAuth service.
   *
   */
  passwordEncryptType?: ValidatePasswordDto.passwordEncryptType;
};

export namespace ValidatePasswordDto {
  /**
   * Password encryption type, supports encryption using RSA256 and National Encryption SM2 algorithms. The default is `none` for no encryption.
   * - `none`: Do not encrypt the password and use plain text for transmission.
   * - `rsa`: Use the RSA256 algorithm to encrypt the password. You need to use the RSA public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the GenAuth service.
   * - `sm2`: Use [National Encryption SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the SM2 public key of the GenAuth service.
   *
   */
  export enum passwordEncryptType {
    SM2 = "sm2",
    RSA = "rsa",
    NONE = "none",
  }
}
