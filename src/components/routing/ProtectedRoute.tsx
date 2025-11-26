
import type { ReactElement } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { RouterEnum } from "@/config/RouterEnum";
import {Navigate} from "react-router";

type Props = { children: ReactElement };

const ProtectedRoute = ({ children }: Props) => {
    const accessToken = useAuthStore((s) => s.accessToken);
    const profile = useAuthStore((s) => s.profile);

    const isAuthenticated = Boolean(accessToken && profile);

    if (!isAuthenticated) {
        return <Navigate to={RouterEnum.MAIN} replace />;
    }

    return children;
};

export default ProtectedRoute;
