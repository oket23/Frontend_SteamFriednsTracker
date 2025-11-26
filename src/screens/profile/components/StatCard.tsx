import type {ReactNode} from "react";
import {cn} from "@/helpers/cn.ts";


const StatCard = ({label, value, sub,}: { label: string; value: ReactNode; sub?: ReactNode; }) => {
    return (
        <div className={cn("rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_16px_55px_-35px_rgba(0,0,0,0.95)] backdrop-blur-xl")}>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                {label}
            </div>
            <div className="mt-2 text-sm font-semibold text-slate-100">{value}</div>
            {sub ? <div className="mt-1 text-xs text-slate-400">{sub}</div> : null}
        </div>
    );
};

export default StatCard;