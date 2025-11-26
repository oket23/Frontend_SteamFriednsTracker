import { useTranslation } from "react-i18next";

const GamesNotFound = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-800/80 bg-slate-950/60 px-6 py-10 text-center shadow-[0_18px_40px_rgba(15,23,42,0.8)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900">
                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-7 w-7 text-slate-500"
                >
                    <path
                        fill="currentColor"
                        d="M16 2H8C6.895 2 6 2.895 6 4V20C6 21.105 6.895 22 8 22H16C17.105 22 18 21.105 18 20V4C18 2.895 17.105 2 16 2ZM14 4H16V6H14V4ZM10 4H12V6H10V4ZM16 20H8V8H16V20Z"
                    />
                </svg>
            </div>

            <p className="text-sm font-semibold text-slate-100">
                {t("gamesPage.notFoundTitle")}
            </p>

            <p className="mt-1 max-w-sm text-xs leading-relaxed text-slate-400">
                {t("gamesPage.notFoundDescription")}
            </p>
        </div>
    );
};

export default GamesNotFound;
