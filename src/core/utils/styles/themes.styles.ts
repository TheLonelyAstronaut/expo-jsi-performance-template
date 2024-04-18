import { FontSize, guidelines } from "./guidelines.styles";

export enum Themes {
    Light = 'light',
    Dark = 'dark',
    System = 'system'
}

export type Color = {
    primary: string;
    secondary: string;
    extra: string;
}

export type Shadow = {
    x: number;
    y: number;
    blur: number;
    color: string;
    opacity: number;
}

export type Fonts = {
    sizes: Record<FontSize, number>;
    lineHeights: Record<FontSize, number>;
    weights: Record<FontSize, string>;
}

export type SizeRange = {
    primary: number;
    secondary: number;
    extra: number;
}

export type Sizes = {
    icon: number;
    margin: SizeRange;
    padding: SizeRange;
    radius: SizeRange;
}

export type Theme = {
    background: Color;
    backgroundInverted: Color;
    accent: Color;
    shadow: Record<string, Shadow>;
    font: Fonts;
    size: Sizes;
}

export const themes: Record<Themes, Theme> = {
    [Themes.Light]: {
        background: {
            primary: guidelines.colors.light.primary,
            secondary: guidelines.colors.light.secondary,
            extra: guidelines.colors.light.description
        },
        backgroundInverted: {
            primary: guidelines.colors.dark.primary,
            secondary: guidelines.colors.dark.secondary,
            extra: guidelines.colors.dark.description
        },
        accent: {
            primary: guidelines.colors.brandAccent.primary,
            secondary: guidelines.colors.brandAccent.secondary,
            extra: guidelines.colors.brandAccent.light
        },
        shadow: guidelines.shadows,
        font: guidelines.fonts,
        size: {
            icon: guidelines.sizes.icon,
            margin: {
                primary: guidelines.sizes.margin,
                secondary: guidelines.sizes.margin / 2,
                extra: guidelines.sizes.margin * 2
            },
            padding: {
                primary: guidelines.sizes.padding,
                secondary: guidelines.sizes.padding / 2,
                extra: guidelines.sizes.padding * 2
            },
            radius: guidelines.sizes.radius
        }
    } as const,
    [Themes.Dark]: {
        background: {
            primary: guidelines.colors.dark.primary,
            secondary: guidelines.colors.dark.secondary,
            extra: guidelines.colors.dark.description
        },
        backgroundInverted: {
            primary: guidelines.colors.light.primary,
            secondary: guidelines.colors.light.secondary,
            extra: guidelines.colors.light.description
        },
        accent: {
            primary: guidelines.colors.brandAccent.primary,
            secondary: guidelines.colors.brandAccent.secondary,
            extra: guidelines.colors.brandAccent.dark
        },
        shadow: guidelines.shadows,
        font: guidelines.fonts,
        size: {
            icon: guidelines.sizes.icon,
            margin: {
                primary: guidelines.sizes.margin,
                secondary: guidelines.sizes.margin / 2,
                extra: guidelines.sizes.margin * 2
            },
            padding: {
                primary: guidelines.sizes.padding,
                secondary: guidelines.sizes.padding / 2,
                extra: guidelines.sizes.padding * 2
            },
            radius: guidelines.sizes.radius
        }
    } as const,
    [Themes.System]: null as Theme
}