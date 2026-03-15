"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-[var(--gold)] text-[var(--night)] hover:bg-[var(--gold-light)]",
                destructive:
                    "bg-red-600 text-white hover:bg-red-700",
                outline:
                    "border border-[rgba(201,168,76,0.4)] bg-transparent text-[var(--gold-light)] hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.07)]",
                secondary:
                    "bg-[rgba(201,168,76,0.12)] text-[var(--cream)] hover:bg-[rgba(201,168,76,0.2)]",
                ghost:
                    "hover:bg-[rgba(201,168,76,0.07)] text-[var(--text-body)] hover:text-[var(--cream)]",
                link: "text-[var(--gold)] underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
