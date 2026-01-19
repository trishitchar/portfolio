"use client";

import { ReactNode } from "react";

interface GridCellProps {
    children: ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3;
}

export function GridCell({
    children,
    className = "",
    colSpan = 1,
    rowSpan = 1
}: GridCellProps) {
    const colSpanClasses = {
        1: "col-span-1",
        2: "col-span-1 md:col-span-2",
        3: "col-span-1 md:col-span-3",
        4: "col-span-1 md:col-span-4",
    };

    const rowSpanClasses = {
        1: "row-span-1",
        2: "row-span-1 md:row-span-2",
        3: "row-span-1 md:row-span-3",
    };

    return (
        <div
            className={`
                ${colSpanClasses[colSpan]} 
                ${rowSpanClasses[rowSpan]}
                group relative
                border-r border-b border-grid
                transition-all duration-300 ease-out
                hover:bg-grid-hover
                ${className}
            `}
        >
            {/* Glassmorphic inner content wrapper */}
            <div className="h-full p-4 md:p-6 relative z-10">
                {children}
            </div>

            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        </div>
    );
}

interface FuturisticGridProps {
    children: ReactNode;
    className?: string;
}

export function FuturisticGrid({ children, className = "" }: FuturisticGridProps) {
    return (
        <div className={`futuristic-grid-container ${className}`}>
            {/* Background grid pattern */}
            <div className="absolute inset-0 grid-background pointer-events-none" />

            {/* Main grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-4 border-l border-t border-grid">
                {children}
            </div>
        </div>
    );
}

export default FuturisticGrid;
