import type { ExtendTheme } from '@pigment-css/react/theme';
import { CoralColors, CoralSpacing} from './src/theme/theme.types';

declare module '@pigment-css/react/theme' {
    interface ThemeArgs {
        theme: ExtendTheme<{
            borderRadius: string;
            borderWidth: string;
            color: CoralColors;
            optionalIndicator?: string;
            remSize: number;
            spacing: CoralSpacing;
        }>;
    }
}