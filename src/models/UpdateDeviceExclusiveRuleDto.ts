/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeviceRuleDto } from './DeviceRuleDto';
import type { IPRuleDto } from './IPRuleDto';

export type UpdateDeviceExclusiveRuleDto = {
    /**
     * Device mutual exclusion rule condition configuration:
     * - `disable`: disable
     * - `condition:device`: Triggered based on the "device unique identifier" condition
     * - `condition:ip`: Triggered based on the "recent login IP" condition
     *
     */
    rule: UpdateDeviceExclusiveRuleDto.rule;
    /**
     * The maximum number of "Unique Device Identifiers" online at the same time
     */
    deviceRule?: DeviceRuleDto;
    /**
     * The maximum number of "recently logged in IP" online at the same time
     */
    ipRule?: IPRuleDto;
};

export namespace UpdateDeviceExclusiveRuleDto {

    /**
     * Device mutual exclusion rule condition configuration:
     * - `disable`: disable
     * - `condition:device`: Triggered based on the "device unique identifier" condition
     * - `condition:ip`: Triggered based on the "recent login IP" condition
     *
     */
    export enum rule {
        DISABLE = 'disable',
        CONDITION_DEVICE = 'condition:device',
        CONDITION_IP = 'condition:ip',
    }


}
