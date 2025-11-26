import { useAuthStore } from "@/store/useAuthStore";
import { useTranslation } from "react-i18next";

const Main = () => {
    const { accessToken, profile } = useAuthStore();
    const isAuthenticated = Boolean(accessToken && profile);
    const { t } = useTranslation();

    return (
        <div className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
            <div className="mx-auto flex min-h-[calc(94.5vh-4rem)] max-w-5xl flex-col items-center justify-center px-4 py-8 sm:py-12">
                <div className="w-full max-w-3xl space-y-4 sm:space-y-5 text-center">
                    <p className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-200/80">
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
                        {t("main.badge")}
                    </p>

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-50">
                        {!isAuthenticated ? (
                            <>
                                {t("main.welcomeGuestPrefix")}{" "}
                                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                                    Steam Tracker
                                </span>
                                {t("main.welcomeGuestSuffix")}
                            </>
                        ) : (
                            <>
                                {t("main.welcomeUserPrefix")}{" "}
                                <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                                    {profile?.nickname}
                                </span>
                                {t("main.welcomeUserSuffix")}
                            </>
                        )}
                    </h1>

                    <p className="mx-auto max-w-xl text-xs sm:text-sm leading-relaxed text-slate-300/85">
                        {!isAuthenticated
                            ? t("main.descriptionGuest")
                            : t("main.descriptionUser")}
                    </p>
                </div>

                <div className="mt-8 sm:mt-10 w-full max-w-3xl space-y-4 text-xs text-slate-400 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
                    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 text-center">
                        <p className="text-sm font-semibold text-slate-200">
                            {t("main.features.statsTitle")}
                        </p>
                        <p className="mt-2 leading-relaxed text-slate-400/90 max-w-xs mx-auto">
                            {t("main.features.statsDescription")}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 text-center">
                        <p className="text-sm font-semibold text-slate-200">
                            {t("main.features.friendsTitle")}
                        </p>
                        <p className="mt-2 leading-relaxed text-slate-400/90 max-w-xs mx-auto">
                            {t("main.features.friendsDescription")}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 text-center">
                        <p className="text-sm font-semibold text-slate-200">
                            {t("main.features.uiTitle")}
                        </p>
                        <p className="mt-2 leading-relaxed text-slate-400/90 max-w-xs mx-auto">
                            {t("main.features.uiDescription")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
