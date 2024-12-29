/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateBizEmailTemplateDto = {
    /**
     * name
     */
    name?: string;
    /**
     * Email subject
     */
    subject: string;
    /**
     * Email content
     */
    content: string;
    /**
     * sender
     */
    sender?: string;
    /**
     * Rendering engine
     */
    tplEngine?: UpdateBizEmailTemplateDto.tplEngine;
};

export namespace UpdateBizEmailTemplateDto {

    /**
     * Rendering engine
     */
    export enum tplEngine {
        HANDLEBAR = 'handlebar',
        EJS = 'ejs',
    }


}
