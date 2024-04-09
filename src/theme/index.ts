import {
  baseTokensColorTokens,
  baseTokensFontSize,
  baseTokensFontWeight,
  baseTokensLineHeight,
  baseTokensSpacing,
  baseTokensBreakpoints,
  baseTokensFontFamily,
  baseTokensBorderRadius,
} from './tokens';
import { baseTokensColor } from './base';

export type BaseTokensColorTokens = typeof baseTokensColorTokens['colorTokens'];
export type BaseTokensFontSize = typeof baseTokensFontSize['fontSize'];
export type BaseTokensFontFamily = typeof baseTokensFontFamily['fontFamily'];
export type BaseTokensFontWeight = typeof baseTokensFontWeight['fontWeight'];
export type BaseTokensLineHeight = typeof baseTokensLineHeight['lineHeight'];
export type BaseTokensSpacing = typeof baseTokensSpacing['spacing'];
export type BaseTokensBreakpoints = typeof baseTokensBreakpoints['breakpoint'];
export type BaseTokensBorderRadius = typeof baseTokensBorderRadius['borderRadius'];
export type BaseTokensColor = typeof baseTokensColor;

type BaseTheme = {
  colorTokens: BaseTokensColorTokens;
  fontSize: BaseTokensFontSize;
  fontFamily: BaseTokensFontFamily;
  fontWeight: BaseTokensFontWeight;
  lineHeight: BaseTokensLineHeight;
  spacing: BaseTokensSpacing;
  breakpoints: BaseTokensBreakpoints;
  borderRadius: BaseTokensBorderRadius;
  color: BaseTokensColor;
};

export const BaseTheme: BaseTheme = {
  colorTokens: baseTokensColorTokens.colorTokens,
  fontSize: baseTokensFontSize.fontSize,
  fontFamily: baseTokensFontFamily.fontFamily,
  fontWeight: baseTokensFontWeight.fontWeight,
  lineHeight: baseTokensLineHeight.lineHeight,
  spacing: baseTokensSpacing.spacing,
  breakpoints: baseTokensBreakpoints.breakpoint,
  borderRadius: baseTokensBorderRadius.borderRadius,
  color: baseTokensColor,
} as const;

export type BaseThemeInterface = typeof BaseTheme;
export type BaseThemeColor = keyof BaseThemeInterface['color'];
