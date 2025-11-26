import {type FC, type PropsWithChildren} from "react";
import Header from "@components/layout/Header.tsx";
import { useTranslation } from "react-i18next";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    const { t } = useTranslation()
    const year = new Date().getFullYear();

    return (
        <div className="">
            <Header />

            <main className="flex-1">
                {children}
            </main>

            <footer className="border-t border-white/10 bg-slate-950/90 py-4 text-center text-[11px] text-slate-400/80 backdrop-blur-xl">
                <p className="tracking-wide">
                    {t("footer.mainText", { year })}
                </p>
            </footer>
        </div>
    );

};

export default Layout;

