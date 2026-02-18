import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { SpacingProps } from "@/core/spacing";
import { Radius, Size } from "@/core/types";

export type ButtonVariant = "filled" | "outlined" | "subtle";

export interface ButtonBaseProps extends SpacingProps {
    children: ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
    variant?: ButtonVariant;
    size?: Size;
    radius?: Radius;
}

export type ButtonAsButtonProps = ButtonBaseProps & {
    component?: "button";
    href?: never;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;

export type ButtonAsAnchorProps = ButtonBaseProps & {
    component: "a";
    href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps>;

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;
