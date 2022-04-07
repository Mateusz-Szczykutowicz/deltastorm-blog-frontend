import { NextPage } from "next";
import {
    PermissionsEnum,
    permissionsI,
} from "../interfaces/permissions.interface";

const PermissionsGate: NextPage<permissionsI> = ({
    permission,
    children,
    userPermission,
}) => {
    console.log("permission :>> ", permission);
    if (permission === userPermission) {
        return <>{children}</>;
    }
    return <></>;
};

export default PermissionsGate;
