import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";
import { ButtonProps } from "./button.types";
import { cx } from "@/core/utils";
import { useSpacing } from "@/core/spacing";
import classes from "./styles/button.module.scss";

export const ButtonComponent: FC<ButtonProps> = ({ children, ...props }) => {
    const {
        disabled = false,
        fullWidth,
        variant = "filled",
        size = "md",
        radius,
        component: Component = "button",
        className,
        ...restProps
    } = props;

    const { classes: spacingClasses, otherProps } = useSpacing(restProps);

    const _disabled = disabled;

    const commonProps = {
        tabIndex: _disabled ? -1 : undefined,
        "aria-disabled": disabled || undefined,
        className: cx(
            classes.root,
            classes[size],
            classes[variant],
            disabled && classes.disabled,
            radius && classes[radius],
            fullWidth && classes.fullWidth,
            ...spacingClasses,
            className
        ),
    };

    const content = (
        <>
            <span className={classes.label}>
                <>{children}</>
            </span>
        </>
    );

    if (Component === "a") {
        const { href, target, ...anchorProps } = otherProps as AnchorHTMLAttributes<HTMLAnchorElement>;

        return (
            <a
                {...commonProps}
                {...anchorProps}
                href={_disabled ? undefined : href}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
            >
                {content}
            </a>
        );
    }

    return (
        <button {...commonProps} {...(otherProps as ButtonHTMLAttributes<HTMLButtonElement>)} disabled={_disabled}>
            {content}
        </button>
    );
};
