/*istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SMTPEmailProviderConfig = {
    /**
     * SMTP address
     */
    smtp_host: string;
    /**
     * SMTP port
     */
    smtp_port: number;
    /**
     * username
     */
    sender: string;
    /**
     * password
     */
    senderPass: string;
    /**
     * Whether to enable SSL
     */
    secure: boolean;
};
