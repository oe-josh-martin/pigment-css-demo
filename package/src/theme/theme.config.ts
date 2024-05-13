import {
    ThemeColors,
    ThemeSpacing,
} from './theme.types';

export const palette: Record<
    string,
    Record<string, { value: string; name: string }>
> = {
    base: {
        hemocyanin: {
            value: '#180048',
            name: 'Hemocyanin',
        },
        siphon: {
            value: '#100030',
            name: 'Siphon',
        },
    },
    primary: {
        sohoLights: {
            value: '#F050F8',
            name: 'Soho Lights',
        },
        sohoLights10: {
            value: 'rgba(240, 80, 248, 0.1)',
            name: 'Soho Lights 10%',
        },
        akoya: {
            value: '#FA98FF',
            name: 'Akoya',
        },
        plum: {
            value: '#600E6B',
            name: 'Plum',
        },
        bubblegum: {
            value: '#FF2FFB',
            name: 'Bubblegum',
        },
    },
    secondary: {
        ink: {
            value: '#5840FF',
            name: 'Ink',
        },
        ink10: {
            value: 'rgba(88, 64, 255, 0.1)',
            name: 'Ink 10%',
        },
        blueTang: {
            value: '#6675F6',
            name: 'Blue Tang',
        },
        blueberry: {
            value: '#2D1A83',
            name: 'Blueberry',
        },
    },
    tertiary: {
        voltage: {
            value: '#60F0F8',
            name: 'Voltage',
        },
        aquamarine: {
            value: '#BDF2FF',
            name: 'Aquamarine',
        },
        aquamarine10: {
            value: 'rgba(189, 242, 255, 0.1)',
            name: 'Aquamarine 10%',
        },
    },
    text: {
        ice: {
            value: '#F0FFFF',
            name: 'Ice',
        },
        dustySky: {
            value: '#D9DDFF',
            name: 'Dusty Sky',
        },
        purpleHaze: {
            value: '#A49FC8',
            name: 'Purple Haze',
        },
        purpleHaze20: {
            value: 'rgba(164, 159, 200, 0.2)',
            name: 'Purple Haze 20%',
        },
    },
    action: {
        green: {
            value: '#10C395',
            name: 'Green',
        },
        green10: {
            value: 'rgba(16, 195, 149, 0.1)',
            name: 'Green 10%',
        },
        green30: {
            value: 'rgba(16, 195, 149, 0.3)',
            name: 'Green 30%',
        },
        mint: {
            value: '#A4FFE8',
            name: 'Mint',
        },
        orange: {
            value: '#EC8243',
            name: 'Orange',
        },
        orange10: {
            value: 'rgba(236, 130, 67, 0.1)',
            name: 'Orange 10%',
        },
        orange30: {
            value: 'rgba(236, 130, 67, 0.3)',
            name: 'Orange 30%',
        },
        oranda: {
            value: '#FFA26B',
            name: 'Oranda',
        },
        red: {
            value: '#FF3E68',
            name: 'Red',
        },
        red10: {
            value: 'rgba(255, 62, 104, 0.1)',
            name: 'Red 10%',
        },
        red30: {
            value: 'rgba(255, 62, 104, 0.3)',
            name: 'Red 30%',
        },
        salmon: {
            value: '#FF809B',
            name: 'Salmon',
        },
        blue: {
            value: '#00C8F8',
            name: 'Blue',
        },
        blue10: {
            value: 'rgba(0, 200, 248, 0.1)',
            name: 'Blue 10%',
        },
        blue30: {
            value: 'rgba(0, 200, 248, 0.3)',
            name: 'Blue 30%',
        },
        squirtle: {
            value: '#71E3FF',
            name: 'Squirtle',
        },
    },
};

export const defaultColors: ThemeColors = {
    base: {
        main: palette.base.hemocyanin.value,
        dark: palette.base.siphon.value,
    },
    primary: {
        main: palette.primary.sohoLights.value,
        main10: palette.primary.sohoLights10.value,
        light: palette.primary.akoya.value,
        dark: palette.primary.plum.value,
        intense: palette.primary.bubblegum.value,
    },
    secondary: {
        main: palette.secondary.ink.value,
        main10: palette.secondary.ink10.value,
        light: palette.secondary.blueTang.value,
        dark: palette.secondary.blueberry.value,
    },
    tertiary: {
        main: palette.tertiary.voltage.value,
        light: palette.tertiary.aquamarine.value,
        light10: palette.tertiary.aquamarine10.value,
    },
    text: {
        main: palette.text.ice.value,
        light: palette.text.dustySky.value,
        mid: palette.text.purpleHaze.value,
        mid20: palette.text.purpleHaze20.value,
        dark: palette.base.siphon.value,
    },
    surface: {
        main: palette.base.hemocyanin.value,
        light: palette.text.ice.value,
        mid: palette.secondary.blueberry.value,
        dark: palette.base.siphon.value,
    },
    action: {
        success: palette.action.green.value,
        success10: palette.action.green10.value,
        success30: palette.action.green30.value,
        successLight: palette.action.mint.value,
        warning: palette.action.orange.value,
        warning10: palette.action.orange10.value,
        warning30: palette.action.orange30.value,
        warningLight: palette.action.oranda.value,
        error: palette.action.red.value,
        error10: palette.action.red10.value,
        error30: palette.action.red30.value,
        errorLight: palette.action.salmon.value,
        info: palette.action.blue.value,
        info10: palette.action.blue10.value,
        info30: palette.action.blue30.value,
        infoLight: palette.action.squirtle.value,
    },
};

export const rem = (px: number, remScale: number): string =>
    `${(px / 10) * remScale}rem`;

export const getSpacing = (remScale: number): ThemeSpacing => ({
    none: 0,
    xxs: rem(4, remScale),
    xs: rem(8, remScale),
    xsSm: rem(12, remScale),
    sm: rem(16, remScale),
    smMd: rem(20, remScale),
    md: rem(24, remScale),
    mdLg: rem(28, remScale),
    lg: rem(32, remScale),
    lgXl: rem(36, remScale),
    xl: rem(40, remScale),
    xxl: rem(48, remScale),
    xxxl: rem(64, remScale),
});

export const getBorderRadius = (remScale: number) => rem(12, remScale);
export const getBorderWidth = (remScale: number) => rem(2, remScale);
