/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SyncTaskLdapClientConfig = {
    /**
     * LDAP link
     */
    url: string;
    /**
     *Bind DN
     */
    bindDn: string;
    /**
     * Bind DN password
     */
    bindCredentials: string;
    /**
     *Users Base DN
     */
    usersBaseDn: string;
    /**
     * Groups Base Dn
     */
    groupsBaseDn: string;
    /**
     * User query conditions
     */
    userQueryCriteria: string;
    /**
     *Department query conditions
     */
    departmentQueryCriteria: string;
};
