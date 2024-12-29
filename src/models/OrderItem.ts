/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrderItem = {
    /**
     *Order number
     */
    orderNo: string;
    /**
     * Package name is in Chinese
     */
    goodsName: string;
    /**
     * Package name in English
     */
    goodsNameEn: string;
    /**
     * unit price
     */
    goodsUnitPrice: string;
    /**
     * quantity
     */
    quantity: string;
    /**
     * Actual amount
     */
    actualAmount: string;
    /**
     * Order status
     */
    status: string;
    /**
     * Order type
     */
    orderType: string;
    /**
     * Creation time
     */
    createTime: string;
    /**
     *Licence: license order, Offline: offline transaction, Eadmin: backend activation, SelfHelp: self-service order, Cdkey: Cdkey activity redemption
     */
    source: string;
};
