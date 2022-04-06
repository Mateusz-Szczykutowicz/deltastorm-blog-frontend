export enum PermissionsEnum {
    user = "user",
    admin = "admin",
    superadmin = "superadmin",
}

export interface permissionsI {
    permission: PermissionsEnum;
}
