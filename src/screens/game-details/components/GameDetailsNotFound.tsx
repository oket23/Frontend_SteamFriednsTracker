import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GameDetailsNotFound = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

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
                        d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.486 17.514 2 12 2ZM13 17H11V15H13V17ZM14.07 10.25L13.17 11.17C12.45 11.89 12 12.5 12 14H10V13.5C10 12.4 10.45 11.4 11.17 10.67L12.41 9.41C12.78 9.05 13 8.55 13 8C13 6.9 12.1 6 11 6C9.9 6 9 6.9 9 8H7C7 5.79 8.79 4 11 4C13.21 4 15 5.79 15 8C15 8.88 14.64 9.68 14.07 10.25Z"
                    />
                </svg>
            </div>

            <p className="text-sm font-semibold text-slate-100">
                {t("gameDetails.notFoundTitle")}
            </p>

            <p className="mt-1 max-w-sm text-xs leading-relaxed text-slate-400">
                {t("gameDetails.notFoundDescription")}
            </p>

            <button
                type="button"
                onClick={handleBack}
                className="
                    mt-5
                    inline-flex items-center justify-center
                    rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold
                    bg-gradient-to-r from-sky-600 to-blue-600
                    text-slate-50 shadow-lg shadow-sky-900/30
                    ring-1 ring-white/10
                    transition-all duration-200
                    hover:scale-[1.02] hover:shadow-sky-500/40
                    active:scale-[0.98]
                    focus:outline-none focus:ring-2 focus:ring-sky-500/40
                "
            >
                {t("gameDetails.backButton")}
            </button>
        </div>
    );
};

export default GameDetailsNotFound;
