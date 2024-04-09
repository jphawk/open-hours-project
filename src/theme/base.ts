import { baseTokensColorTokens } from './tokens';

const { colorTokens } = baseTokensColorTokens;

export const baseTokensColor = {
  text: {
    headline: {
      default: colorTokens.black,
    },
    label: {
      default: colorTokens.black,
      disabled: colorTokens.grey3,
    },
    accent: colorTokens.green,
  },
  surface: {
    default: colorTokens.grey1,
    overlay: colorTokens.white,
  },
  border: {
    default: colorTokens.grey2,
    shadow: colorTokens.grey3,
    accent: colorTokens.black,
  },
  icon: {
    default: colorTokens.grey3,
  },
};
