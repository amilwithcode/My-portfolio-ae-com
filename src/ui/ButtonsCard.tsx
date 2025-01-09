"use client"


import { cn } from "@/src/lib/utils";

export const ButtonsCard = ({
    children,
    className,
    onClick,
}: {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "h-10 w-full rounded-xl border border-neutral-100 dark:bg-black dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center",
                className
            )}
        >
            <div className="absolute inset-0 dark:border-white/[0.1] bg-dot-black/[0.1]" />
            
            <div className="relative z-40">{children}</div>
        </div>
    );
};
