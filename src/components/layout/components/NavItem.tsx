import { cn } from "@/helpers/cn";
import { useNavigate, useLocation } from "react-router-dom";

type NavItemProps = {
    label: string;
    path: string;
    disabled: boolean;
    color?: "sky" | "emerald";
    fullWidth?: boolean;
    className?: string;
};

const NavItem = ({label, path, disabled, color = "sky", fullWidth = false, className,}: NavItemProps) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isActive = pathname === path;

    return (
        <button
            type="button"
            disabled={disabled}
            onClick={() => navigate(path)}
            className={cn(
                "group relative inline-flex items-center justify-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                fullWidth && "w-full",
                !disabled && !isActive && "bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-sky-100 cursor-pointer",
                !disabled && isActive && (color === "sky"
                    ? "bg-sky-500 text-slate-950 shadow-md shadow-sky-500/40"
                    : "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/40"),
                disabled && "bg-slate-900/40 text-slate-500 opacity-60",
                "focus:outline-none focus:ring-2 focus:ring-slate-500/30",
                className,
            )}
        >
            <span
                className={cn(
                    "h-2 w-2 rounded-full",
                    disabled && "bg-slate-600",
                    !disabled && color === "sky" && (isActive ? "bg-slate-950" : "bg-sky-400"),
                    !disabled && color === "emerald" && (isActive ? "bg-slate-950" : "bg-emerald-400"),
                )}
            />

            <span>{label}</span>

            {!disabled && !isActive && (
                <span className="pointer-events-none absolute inset-x-4 -bottom-px h-[2px] scale-x-0 bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
            )}
        </button>
    );
};

export default NavItem;
