import { SpacingProps } from "./spacing.types";

const spacingMap: Record<string, string> = {
    padding: "p",
    margin: "m",
};

const spacingKeys: Array<keyof SpacingProps> = [
    "p",
    "px",
    "py",
    "pt",
    "pb",
    "pl",
    "pr",
    "m",
    "mx",
    "my",
    "mt",
    "mb",
    "ml",
    "mr",
    "padding",
    "margin",
];

type SpacingPropKey = (typeof spacingKeys)[number];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const extractSpacingProps = <T extends Record<string, any>>(props: T) => {
    const spacingProps: Partial<SpacingProps> = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const otherProps: Record<string, any> = {};

    Object.entries(props).forEach(([key, value]) => {
        if (spacingKeys.includes(key as SpacingPropKey)) {
            spacingProps[key as SpacingPropKey] = value;
        } else {
            otherProps[key] = value;
        }
    });

    return {
        spacingProps: spacingProps as SpacingProps,
        otherProps: otherProps as Omit<T, SpacingPropKey>,
    };
};

export const useSpacing = (props: SpacingProps) => {
    const { spacingProps, otherProps } = extractSpacingProps(props);
    const classes: string[] = [];

    spacingKeys.forEach((key) => {
        const value = spacingProps[key];
        if (value === undefined || value === null) {
            return;
        }

        const isToken = value >= 0 && value <= 16;
        if (isToken) {
            const shortProp = spacingMap[key] || key;
            const className = `${shortProp}-${value}`;
            classes.push(className);
        }
    });

    return {
        classes,
        otherProps,
    };
};
