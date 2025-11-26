import type {FC, PropsWithChildren} from "react";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider.tsx";
import I18NextProvider from "@/providers/i18nextProvider.tsx";

const Providers: FC<PropsWithChildren> = ({children}) => {
    return (
        <I18NextProvider>
            <TanstackQueryProvider>
                {children}
            </TanstackQueryProvider>
        </I18NextProvider>

    );
};

export default Providers;