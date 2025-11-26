import { cn } from "@/helpers/cn.ts";

const Skeleton = () => {
    const Sh = ({ className }: { className: string }) => (
        <div className={cn("animate-pulse rounded-lg bg-white/5", className)} />
    );

    return (
        <div
            className={cn(
                "relative min-h-[calc(99.7vh-7rem)]",
                "bg-slate-950 text-slate-100"
            )}
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
                <div className="absolute -bottom-24 left-1/3 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.10),transparent_60%),radial-gradient(800px_500px_at_20%_110%,rgba(52,211,153,0.10),transparent_55%)]" />
            </div>

            <div className="relative mx-auto w-full max-w-6xl px-4 py-7 sm:px-6 lg:px-8">
                <div
                    className={cn(
                        "overflow-hidden rounded-2xl border border-white/5",
                        "bg-slate-950/40 shadow-[0_16px_55px_-35px_rgba(0,0,0,0.95)]"
                    )}
                >
                    <div className="relative px-5 py-5 sm:px-6">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#182235]/70 via-slate-950/30 to-transparent" />
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/15 to-transparent" />

                        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-sky-500/10 blur-xl" />
                                    <Sh className="relative h-[88px] w-[88px] rounded-full ring-2 ring-white/10" />

                                    <div className="absolute -bottom-1 -right-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#0e121a]/90">
                                        <Sh className="h-3 w-3 rounded-full" />
                                    </div>
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <Sh className="h-7 w-44 sm:w-56" />
                                        <Sh className="h-6 w-24 rounded-full" />
                                    </div>
                                    <div className="mt-2 flex flex-wrap gap-3">
                                        <Sh className="h-4 w-44" />
                                        <Sh className="h-4 w-28" />
                                    </div>
                                    <div className="mt-2">
                                        <Sh className="h-4 w-40" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 sm:justify-end">
                                <Sh className="h-10 w-40 rounded-full" />
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/5 px-5 py-5 sm:px-6">
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="rounded-xl border border-white/5 bg-slate-950/40 px-4 py-3">
                                <Sh className="h-3 w-28" />
                                <Sh className="mt-2 h-4 w-40" />
                            </div>
                            <div className="rounded-xl border border-white/5 bg-slate-950/40 px-4 py-3">
                                <Sh className="h-3 w-36" />
                                <Sh className="mt-2 h-4 w-44" />
                            </div>
                            <div className="rounded-xl border border-white/5 bg-slate-950/40 px-4 py-3">
                                <Sh className="h-3 w-24" />
                                <Sh className="mt-2 h-4 w-36" />
                            </div>
                            <div className="rounded-xl border border-white/5 bg-slate-950/40 px-4 py-3">
                                <Sh className="h-3 w-28" />
                                <Sh className="mt-2 h-4 w-32" />
                                <Sh className="mt-2 h-3 w-24" />
                            </div>
                        </div>

                        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[360px,1fr]">
                            <div
                                className={cn(
                                    "rounded-2xl border border-white/5 bg-slate-950/35 p-4",
                                    "shadow-[0_10px_40px_-25px_rgba(0,0,0,0.9)]"
                                )}
                            >
                                <div className="mb-4 flex items-center justify-between">
                                    <Sh className="h-3 w-28" />
                                    <Sh className="h-3 w-10" />
                                </div>

                                <div className="space-y-2">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-900/25 px-3 py-2"
                                        >
                                            <Sh className="h-3 w-24" />
                                            <Sh className="h-3 w-16" />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                <div className="mt-4 rounded-xl border border-white/5 bg-slate-900/20 p-3">
                                    <div className="flex items-start gap-3">
                                        <Sh className="mt-1 h-2 w-2 rounded-full" />
                                        <div className="flex-1 space-y-2">
                                            <Sh className="h-3 w-full" />
                                            <Sh className="h-3 w-5/6" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <Sh className="h-10 w-full rounded-full" />
                                </div>
                            </div>

                            <div
                                className={cn(
                                    "rounded-2xl border border-white/5 bg-slate-950/35 p-4",
                                    "shadow-[0_10px_40px_-25px_rgba(0,0,0,0.9)]"
                                )}
                            >
                                <div className="mb-4 flex items-center justify-between">
                                    <Sh className="h-3 w-28" />
                                    <Sh className="h-3 w-12" />
                                </div>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl border border-white/5 bg-slate-900/25 p-4">
                                        <Sh className="h-3 w-28" />
                                        <Sh className="mt-3 h-4 w-40" />
                                        <Sh className="mt-2 h-3 w-32" />
                                    </div>
                                    <div className="rounded-xl border border-white/5 bg-slate-900/25 p-4">
                                        <Sh className="h-3 w-24" />
                                        <Sh className="mt-3 h-4 w-28" />
                                        <Sh className="mt-2 h-3 w-20" />
                                    </div>
                                </div>

                                <div className="mt-3 rounded-xl border border-white/5 bg-slate-900/20 p-4">
                                    <Sh className="h-3 w-36" />
                                    <Sh className="mt-3 h-4 w-2/3" />
                                    <Sh className="mt-2 h-3 w-1/2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skeleton;
