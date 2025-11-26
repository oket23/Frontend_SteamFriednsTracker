import {cn} from "@/helpers/cn.ts";

const CenterMessage = ({ title, desc }: { title: string; desc: string }) => (
    <div className="mx-auto flex min-h-[calc(99.7vh-7rem)] w-full max-w-6xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div
            className={cn(
                "w-full max-w-lg rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 text-center",
                "shadow-[0_20px_60px_-30px_rgba(0,0,0,0.75)] backdrop-blur-xl"
            )}
        >
            <div className="mx-auto mb-3 h-10 w-10 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 ring-1 ring-white/10" />
            <h1 className="text-lg font-bold text-white">{title}</h1>
            <p className="mt-2 text-sm text-slate-400">{desc}</p>
        </div>
    </div>
);

export default CenterMessage;