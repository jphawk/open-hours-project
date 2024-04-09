import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import { BaseThemeColor, BaseTokensFontWeight } from '../../theme/index';
import { LabelSize } from '../../utils/enums';

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  size: LabelSize | keyof typeof LabelSize;
  color?: BaseThemeColor | string;
  fontWeight?: BaseTokensFontWeight | number;
  disabled?: boolean;
}

export const Label = styled.label<LabelProps>(
  ({ theme: { base }, size, fontWeight, color, disabled }) => css`
    font-family: ${base.fontFamily.Roboto};
    font-style: normal;
    margin: 0;

    ${size === LabelSize.One &&
      `
      font-size: ${base.fontSize.label.one}rem;
      line-height: ${base.lineHeight.label.one};
      font-weight:  ${
        fontWeight ?? disabled
          ? base.fontWeight.regular
          : base.fontWeight.medium
      };
      color: ${
        color ?? disabled
          ? base.color.text.label.disabled
          : base.color.text.label.default
      };

      @media screen and (max-width: ${base.breakpoints.md}) {
        font-size: ${base.fontSize.label.two}rem;
      }
    `}

    ${size === LabelSize.Two &&
      `
      font-size: ${base.fontSize.label.three}rem;
      line-height: ${base.lineHeight.label.two};
      font-weight:  ${base.fontWeight.bold};
      color: ${color ?? base.color.text.accent};
      text-transform: uppercase;
    `}
  `
);
