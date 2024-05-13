import { defaultColors, getBorderRadius, getBorderWidth, getSpacing } from './theme.config.ts';

export const defaultTheme = {
    color: defaultColors,
    borderRadius: getBorderRadius(1),
    borderWidth: getBorderWidth(1),
    spacing: getSpacing(1),
};