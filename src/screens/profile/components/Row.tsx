import type {ReactNode} from "react";

const Row = ({ k, v }: { k: string; v: ReactNode }) => (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-slate-900/30 px-4 py-3">
        <span className="text-xs text-slate-400">{k}</span>
        <span className="text-xs font-semibold text-slate-100">{v}</span>
    </div>
);

export default Row;