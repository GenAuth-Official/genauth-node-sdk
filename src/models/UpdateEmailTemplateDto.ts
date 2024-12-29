/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateEmailTemplateDto = {
  /**
   * Template type:
   * - `WELCOME_EMAIL`: Welcome email
   * - `FIRST_CREATED_USER`: First user creation notification
   * - `REGISTER_VERIFY_CODE`: Registration verification code
   * - `LOGIN_VERIFY_CODE`: Login verification code
   * - `MFA_VERIFY_CODE`: MFA verification code
   * - `INFORMATION_COMPLETION_VERIFY_CODE`: Registration information completion verification code
   * - `FIRST_EMAIL_LOGIN_VERIFY`: First email login verification
   * - `CONSOLE_CONDUCTED_VERIFY`: Initiate email verification in the console
   * - `USER_PASSWORD_UPDATE_REMIND`: User expiration reminder
   * - `ADMIN_RESET_USER_PASSWORD_NOTIFICATION`: Administrator reset user password success notification
   * - `USER_PASSWORD_RESET_NOTIFICATION`: User password reset success notification
   * - `RESET_PASSWORD_VERIFY_CODE`: Reset password verification code
   * - `SELF_UNLOCKING_VERIFY_CODE`: Self-service unlocking verification code
   * - `EMAIL_BIND_VERIFY_CODE`: Binding email verification code
   * - `EMAIL_UNBIND_VERIFY_CODE`: Unbinding email verification code
   *
   */
  type: UpdateEmailTemplateDto.type;
  /**
   * Whether to enable custom templates
   */
  customizeEnabled: boolean;
  /**
   * Email template name
   */
  name: string;
  /**
   * Email subject
   */
  subject: string;
  /**
   * Email sender name
   */
  sender: string;
  /**
   * Email content template
   */
  content: string;
  /**
   * Verification code/email validity period. Only verification emails have validity period.
   */
  expiresIn?: number;
  /**
   * The address to jump to after completing email verification. Only valid for templates of type `FIRST_EMAIL_LOGIN_VERIFY` and `CONSOLE_CONDUCTED_VERIFY`.
   */
  redirectTo?: string;
  /**
   * Template rendering engine. GenAuth email templates currently support two rendering engines:
   * - `handlebar`: For detailed usage, please see: [handlebars official documentation](https://handlebarsjs.com/)
   * - `ejs`: For detailed usage, please see: [ejs official documentation](https://ejs.co/)
   *
   * `handlerbar` will be used as the template rendering engine by default.
   *
   */
  tplEngine?: UpdateEmailTemplateDto.tplEngine;
};

export namespace UpdateEmailTemplateDto {
  /**
   * Template type:
   * - `WELCOME_EMAIL`: Welcome email
   * - `FIRST_CREATED_USER`: First user creation notification
   * - `REGISTER_VERIFY_CODE`: Registration verification code
   * - `LOGIN_VERIFY_CODE`: Login verification code
   * - `MFA_VERIFY_CODE`: MFA verification code
   * - `INFORMATION_COMPLETION_VERIFY_CODE`: Registration information completion verification code
   * - `FIRST_EMAIL_LOGIN_VERIFY`: First email login verification
   * - `CONSOLE_CONDUCTED_VERIFY`: Initiate email verification in the console
   * - `USER_PASSWORD_UPDATE_REMIND`: User expiration reminder
   * - `ADMIN_RESET_USER_PASSWORD_NOTIFICATION`: Administrator reset user password success notification
   * - `USER_PASSWORD_RESET_NOTIFICATION`: User password reset success notification
   * - `RESET_PASSWORD_VERIFY_CODE`: Reset password verification code
   * - `SELF_UNLOCKING_VERIFY_CODE`: Self-service unlocking verification code
   * - `EMAIL_BIND_VERIFY_CODE`: Binding email verification code
   * - `EMAIL_UNBIND_VERIFY_CODE`: Unbinding email verification code
   *
   */
  export enum type {
    WELCOME_EMAIL = "WELCOME_EMAIL",
    FIRST_CREATED_USER = "FIRST_CREATED_USER",
    REGISTER_VERIFY_CODE = "REGISTER_VERIFY_CODE",
    LOGIN_VERIFY_CODE = "LOGIN_VERIFY_CODE",
    MFA_VERIFY_CODE = "MFA_VERIFY_CODE",
    INFORMATION_COMPLETION_VERIFY_CODE = "INFORMATION_COMPLETION_VERIFY_CODE",
    FIRST_EMAIL_LOGIN_VERIFY = "FIRST_EMAIL_LOGIN_VERIFY",
    CONSOLE_CONDUCTED_VERIFY = "CONSOLE_CONDUCTED_VERIFY",
    USER_PASSWORD_UPDATE_REMIND = "USER_PASSWORD_UPDATE_REMIND",
    ADMIN_RESET_USER_PASSWORD_NOTIFICATION = "ADMIN_RESET_USER_PASSWORD_NOTIFICATION",
    USER_PASSWORD_RESET_NOTIFICATION = "USER_PASSWORD_RESET_NOTIFICATION",
    RESET_PASSWORD_VERIFY_CODE = "RESET_PASSWORD_VERIFY_CODE",
    SELF_UNLOCKING_VERIFY_CODE = "SELF_UNLOCKING_VERIFY_CODE",
    EMAIL_BIND_VERIFY_CODE = "EMAIL_BIND_VERIFY_CODE",
    EMAIL_UNBIND_VERIFY_CODE = "EMAIL_UNBIND_VERIFY_CODE",
  }
  /** * Template rendering engine. GenAuth email template currently supports two rendering engines:
   * - `handlebar`: For detailed usage, please see: [handlebars official documentation](https://handlebarsjs.com/)
   * - `ejs`: For detailed usage, please see: [ejs official documentation](https://ejs.co/)
   *
   * By default, `handlerbar` will be used as the template rendering engine.
   *
   */
  export enum tplEngine {
    HANDLEBAR = "handlebar",
    EJS = "ejs",
  }
}
