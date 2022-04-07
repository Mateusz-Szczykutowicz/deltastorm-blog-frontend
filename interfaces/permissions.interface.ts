export enum PermissionsEnum {
    GUEST = "guest",
    USER = "user",
    ADMIN = "admin",
    SUPERADMIN = "superadmin",
    BLOCKED = "blocked",
}

type permissionTypeUnion =
    | "guest"
    | "user"
    | "admin"
    | "superadmin"
    | "blocked";
export interface permissionsI {
    permission: PermissionsEnum | permissionTypeUnion;
    userPermission: PermissionsEnum | permissionTypeUnion;
}
