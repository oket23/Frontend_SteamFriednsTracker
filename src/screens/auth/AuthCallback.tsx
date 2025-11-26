import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFinishSteamLoginFromQuery } from "@/screens/auth/hooks/useFinishSteamLoginFromQuery";
import { RouterEnum } from "@/config/RouterEnum";

export default function AuthCallback() {
    const location = useLocation();
    const navigate = useNavigate();

    const { isLoading, isSuccess, isError, hasTokens } =
        useFinishSteamLoginFromQuery(location.search);

    useEffect(() => {
        if (!hasTokens) {
            navigate(RouterEnum.MAIN);
            return;
        }
        if (isSuccess) {
            navigate(RouterEnum.MAIN);
            return;
        }

        if (isError) {
            navigate(RouterEnum.MAIN);
        }
    }, [hasTokens, isSuccess, isError, navigate]);

    return <div>{isLoading ? "Finishing login..." : "Redirecting..."}</div>;
}
