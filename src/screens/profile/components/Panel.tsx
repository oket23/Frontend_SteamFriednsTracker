import {cn} from "@/helpers/cn.ts";
import type {ReactNode} from "react";

const Panel = ({title, right, children,}: { title: string; right?: ReactNode; children: ReactNode; }) => {
    return (
        <div className={cn("rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_16px_55px_-35px_rgba(0,0,0,0.95)] backdrop-blur-xl")}>
            <div className="mb-4 flex items-center justify-between gap-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
                    {title}
                </div>
                {right ? <div className="text-xs text-slate-500">{right}</div> : null}
            </div>
            {children}
        </div>
    );
};

export default Panel;