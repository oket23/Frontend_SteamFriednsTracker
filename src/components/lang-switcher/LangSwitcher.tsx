import { useTranslation } from "react-i18next";
import { cn } from "@/helpers/cn";

export type ILang = "en" | "uk";

const LangSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: ILang) => {
        i18n.changeLanguage(lng);
    };

    const isEn = i18n.language?.startsWith("en");
    const isUk = i18n.language?.startsWith("uk");

    const pillBase = cn(
        "cursor-pointer relative inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-slate-500/30"
    );

    const pillActive = "bg-sky-500 text-slate-950 shadow-md shadow-sky-500/40";
    const pillInactive = "bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-sky-100";
    const pillDisabled = "opacity-70";

    return (
        <div className="flex items-center gap-2">
            <div className={cn("flex items-center gap-1 rounded-full p-1", "bg-slate-950/40 ring-1 ring-white/10")}>
                <button
                    onClick={() => changeLanguage("en")}
                    disabled={isEn}
                    aria-pressed={isEn}
                    className={cn(pillBase, isEn ? pillActive : pillInactive, isEn && pillDisabled)}
                >
                    EN
                </button>

                <button
                    onClick={() => changeLanguage("uk")}
                    disabled={isUk}
                    aria-pressed={isUk}
                    className={cn(pillBase, isUk ? pillActive : pillInactive, isUk && pillDisabled)}
                >
                    UK
                </button>
            </div>
        </div>
    );
};

export default LangSwitcher;
