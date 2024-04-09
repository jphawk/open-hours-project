import 'styled-components';
import { BaseThemeInterface } from '../theme/index';

export interface CombinedTheme extends ThemeInterface {
  base: BaseThemeInterface;
}

declare module 'styled-components' {
  export interface DefaultTheme extends CombinedTheme {}
}
