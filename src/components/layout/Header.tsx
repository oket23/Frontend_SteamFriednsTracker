import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import { SERVER_URL, getLoginUrl } from "@/config/api.config";
import { RouterEnum } from "@/config/RouterEnum";
import LangSwitcher from "@components/lang-switcher/LangSwitcher";
import { useTranslation } from "react-i18next";
import { cn } from "@/helpers/cn";
import NavItem from "@components/layout/components/NavItem";

const navItems = [
    { labelKey: "header.navFriends", path: "/friends", color: "emerald" as const },
    { labelKey: "header.navGames", path: "/games", color: "sky" as const },
];

const Header = () => {
    const navigate = useNavigate();
    const { accessToken, profile } = useAuthStore();
    const isAuthenticated = Boolean(accessToken);
    const { t } = useTranslation();

    const handleLoginClick = () => {
        window.location.href = SERVER_URL + getLoginUrl();
    };

    return (
        <header
            className={cn(
                "sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl",
            )}
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(RouterEnum.MAIN)}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 text-lg font-bold text-white">
                            S
                        </div>
                        <span className="text-lg font-semibold text-slate-100">
                            {t("header.appName")}
                        </span>
                    </button>

                    {/* desktop nav */}
                    <nav className="hidden md:flex items-center gap-3">
                        {navItems.map((item) => (
                            <NavItem
                                key={item.path}
                                label={t(item.labelKey)}
                                path={item.path}
                                color={item.color}
                                disabled={!isAuthenticated}
                            />
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden sm:block">
                        <LangSwitcher />
                    </div>

                    {!isAuthenticated || !profile ? (
                        <button
                            onClick={handleLoginClick}
                            className={cn(
                                "relative inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                                "bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-sky-100",
                                "focus:outline-none focus:ring-2 focus:ring-slate-500/30",
                            )}
                        >
                            {t("header.login")}
                        </button>
                    ) : (
                        <button
                            onClick={() => navigate(RouterEnum.PROFILE)}
                            className={cn(
                                "relative inline-flex items-center justify-center rounded-full px-2 py-1.5 text-sm font-medium transition-all",
                                "bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-sky-100",
                                "focus:outline-none focus:ring-2 focus:ring-slate-500/30",
                            )}
                            title={profile.nickname}
                        >
                            <span className="relative mr-2 h-7 w-7 overflow-hidden rounded-full">
                                <img
                                    src={profile.avatarUrl}
                                    alt={profile.nickname}
                                    className="h-full w-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            </span>
                            <span className="hidden sm:inline max-w-[140px] truncate">
                                {profile.nickname}
                            </span>
                        </button>
                    )}
                </div>
            </div>

            {/* mobile nav */}
            <div className="md:hidden border-t border-slate-800">
                <div className="mx-auto max-w-6xl px-4 py-3">
                    <div className="flex gap-3">
                        {navItems.map((item) => (
                            <NavItem
                                key={item.path}
                                label={t(item.labelKey)}
                                path={item.path}
                                color={item.color}
                                disabled={!isAuthenticated}
                                fullWidth
                            />
                        ))}
                    </div>

                    <div className="mt-3 flex justify-center sm:hidden">
                        <LangSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
