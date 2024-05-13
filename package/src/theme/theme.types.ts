export interface BaseColorSet {
    main: string;
    dark: string;
}

export interface PrimaryColorSet {
    main: string;
    main10: string;
    light: string;
    dark: string;
    intense: string;
}

export interface SecondaryColorSet {
    main: string;
    main10: string;
    light: string;
    dark: string;
}

export interface TertiaryColorSet {
    main: string;
    light: string;
    light10: string;
}

export interface TextColorSet {
    main: string;
    light: string;
    mid: string;
    mid20: string;
    dark: string;
}

export interface SurfaceColorSet {
    main: string;
    light: string;
    mid: string;
    dark: string;
}
export interface ActionColorSet {
    success: string;
    success10: string;
    success30: string;
    successLight: string;
    warning: string;
    warning10: string;
    warning30: string;
    warningLight: string;
    error: string;
    error10: string;
    error30: string;
    errorLight: string;
    info: string;
    info10: string;
    info30: string;
    infoLight: string;
}

export interface ThemeColors {
    base: BaseColorSet;
    primary: PrimaryColorSet;
    secondary: SecondaryColorSet;
    tertiary: TertiaryColorSet;
    text: TextColorSet;
    surface: SurfaceColorSet;
    action: ActionColorSet;
}

export interface ThemeSpacing {
    none: number;
    xxs: string;
    xs: string;
    xsSm: string;
    sm: string;
    smMd: string;
    md: string;
    mdLg: string;
    lg: string;
    lgXl: string;
    xl: string;
    xxl: string;
    xxxl: string;
}

export type ThemePadding = keyof ThemeSpacing;

export type ThemeMargin = keyof ThemeSpacing | 'auto';
