import type { FC, KeyboardEvent } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/helpers/cn";
import type { SteamScreenshot } from "@/types/IGameDetails";
import useModal from "@/hooks/useModal/useModal";
import Modal from "@/ui/modal/Modal";

type GameScreenshotsProps = {
    gameName: string;
    screenshots: SteamScreenshot[];
};

const GameScreenshots: FC<GameScreenshotsProps> = ({ gameName, screenshots }) => {
    const modal = useModal();
    const { t } = useTranslation();

    if (!screenshots || screenshots.length === 0) {
        return null;
    }

    const currentIndex =
        typeof modal.stateModal === "number" ? modal.stateModal : 0;
    const currentShot = screenshots[currentIndex];

    const handleOpen = (index: number) => {
        modal.onOpen(index);
    };

    const handlePrev = () => {
        const nextIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
        modal.onOpen(nextIndex);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % screenshots.length;
        modal.onOpen(nextIndex);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
    };

    return (
        <>
            <section className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 sm:p-5">
                <h2 className="text-sm font-semibold text-slate-100">
                    {t("gameDetails.sections.screenshots")}
                </h2>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    {screenshots.slice(0, 8).map((shot, index) => (
                        <button
                            key={shot.id}
                            type="button"
                            onClick={() => handleOpen(index)}
                            className={cn(
                                "group relative aspect-video overflow-hidden rounded-lg",
                                "border border-slate-800/80 bg-slate-900",
                                "transition-all duration-300 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-900/20",
                                "focus:outline-none focus:ring-2 focus:ring-sky-500/40",
                            )}
                        >
                            <img
                                src={shot.path_thumbnail}
                                alt={`${gameName} screenshot ${index + 1}`}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-sky-900/0 transition-colors duration-300 group-hover:bg-sky-900/10" />
                        </button>
                    ))}
                </div>
            </section>

            <Modal
                {...modal}
                className="max-w-7xl w-full bg-slate-950 border border-slate-800 shadow-2xl shadow-black rounded-xl overflow-hidden"
            >
                <div
                    className="flex flex-col outline-none"
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-slate-900/50">
                        <div className="flex flex-col pr-4">
                            <span className="text-base font-semibold text-slate-100 line-clamp-1">
                                {gameName}
                            </span>
                            <span className="text-[11px] font-normal text-slate-400">
                                {t("gameDetails.screenshots.counter", {
                                    current: currentIndex + 1,
                                    total: screenshots.length,
                                })}
                            </span>
                        </div>

                        <button
                            onClick={modal.onClose}
                            className="
                                group flex h-9 w-9 items-center justify-center rounded-full
                                text-slate-400 transition-colors duration-200
                                hover:bg-white/10 hover:text-white
                                focus:outline-none focus:ring-2 focus:ring-sky-500/40
                            "
                            type="button"
                            title={t("gameDetails.screenshots.close")}
                        >
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <Modal.Body className="p-0 bg-black/40">
                        <div className="relative flex h-[70vh] sm:h-[80vh] w-full items-center justify-center p-2 sm:p-4">
                            {currentShot ? (
                                <img
                                    src={currentShot.path_full}
                                    alt="Screenshot fullscreen"
                                    className="h-full w-full object-contain drop-shadow-2xl"
                                />
                            ) : (
                                <div className="text-slate-500">
                                    {t("gameDetails.screenshots.notFound")}
                                </div>
                            )}
                        </div>
                    </Modal.Body>

                    <Modal.Footer className="border-t border-white/5 bg-slate-900/50 px-6 py-4">
                        <div className="flex items-center justify-between gap-4">
                            <button
                                type="button"
                                onClick={handlePrev}
                                className="
                                    group inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium transition-all
                                    bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white
                                    focus:outline-none focus:ring-2 focus:ring-slate-500/40
                                "
                            >
                                <svg
                                    className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                                <span>{t("gameDetails.screenshots.prev")}</span>
                            </button>

                            <button
                                type="button"
                                onClick={handleNext}
                                className="
                                    group inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium transition-all
                                    bg-sky-600 text-white shadow-lg shadow-sky-900/20 hover:bg-sky-500 hover:shadow-sky-500/30
                                    focus:outline-none focus:ring-2 focus:ring-sky-500/40
                                "
                            >
                                <span>{t("gameDetails.screenshots.next")}</span>
                                <svg
                                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    );
};

export default GameScreenshots;
