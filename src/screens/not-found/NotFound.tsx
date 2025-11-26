import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { cn } from "@/helpers/cn";

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <div
            className={cn(
                "relative flex min-h-[calc(99.7vh-7rem)] items-center justify-center px-6 py-10",
                "bg-slate-950 text-slate-100"
            )}
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
                <div className="absolute -bottom-24 left-1/3 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.10),transparent_60%),radial-gradient(800px_500px_at_20%_110%,rgba(52,211,153,0.10),transparent_55%)]" />
            </div>

            <div className="relative w-full max-w-2xl">
                <div
                    className={cn(
                        "rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10",
                        "shadow-[0_20px_60px_-30px_rgba(0,0,0,0.75)] backdrop-blur-xl"
                    )}
                >
                    <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-sky-500/25 to-transparent" />

                    <div className="flex flex-col items-center text-center">
                        <div className="relative mb-6">
                            <div className="absolute inset-0 rounded-2xl bg-sky-500/15 blur-xl" />
                            <div className="relative inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/50 px-5 py-3">
                                <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-300">
                                    {t("notFoundPage.badge")}
                                </span>
                            </div>
                        </div>

                        <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl">
                            404
                        </h1>

                        <h2 className="mt-3 text-xl font-semibold text-slate-200 sm:text-2xl">
                            {t("notFoundPage.title")}
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                            {t("notFoundPage.description")}
                        </p>

                        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                            <Link
                                to="/"
                                className={cn(
                                    "group relative inline-flex items-center justify-center gap-2 overflow-hidden",
                                    "rounded-full px-6 py-2.5 text-sm font-bold text-white",
                                    "bg-gradient-to-r from-sky-600 to-blue-600",
                                    "shadow-lg shadow-sky-900/20 ring-1 ring-white/15",
                                    "transition-all duration-300 hover:shadow-sky-500/35 hover:scale-[1.02] active:scale-[0.98]",
                                    "focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                                )}
                            >
                                <span className="absolute inset-0 bg-white/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <span>{t("notFoundPage.buttonPrimary")}</span>
                            </Link>
                        </div>

                        <div className="mt-8 w-full rounded-xl border border-white/10 bg-slate-900/30 p-4 text-left">
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
                                <div className="text-xs text-slate-400">
                                    {t("notFoundPage.tip")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center text-[11px] text-slate-500">
                    {t("notFoundPage.errorCodeLabel")}{" "}
                    <span className="font-semibold text-slate-400">
                        {t("notFoundPage.errorCodeValue")}
                    </span>
                </div>
            </div>
        </div>
    );
}
