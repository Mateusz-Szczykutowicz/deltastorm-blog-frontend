import { NextPage } from "next";
import { permissionsI } from "../interfaces/permissions.interface";

const PermissionsGate: NextPage<permissionsI> = (props) => {
    if (props.permission == "user") {
        return <>{props.children}</>;
    }
    return <></>;
};

export default PermissionsGate;
