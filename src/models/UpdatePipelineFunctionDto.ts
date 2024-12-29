/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdatePipelineFunctionDto = {
    /**
     * Pipeline function ID
     */
    funcId: string;
    /**
     * function name
     */
    funcName?: string;
    /**
     * Function description
     */
    funcDescription?: string;
    /**
     * Function source code. If modified, the function will be uploaded again.
     */
    sourceCode?: string;
    /**
     * Whether to execute asynchronously. Functions set for asynchronous execution will not block the execution of the entire process and are suitable for asynchronous notification scenarios, such as Feishu group notifications, DingTalk group notifications, etc.
     */
    isAsynchronous?: boolean;
    /**
     * Function running timeout, the minimum is 1 second, the maximum is 60 seconds, the default is 3 seconds.
     */
    timeout?: number;
    /**
     * If the function times out, whether to terminate the entire process, the default is no.
     */
    terminateOnTimeout?: boolean;
    /**
     * Whether to enable this Pipeline
     */
    enabled?: boolean;
};
