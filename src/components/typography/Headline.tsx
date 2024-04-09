import styled, { css } from 'styled-components';

import { BaseThemeColor, BaseTokensFontWeight } from '../../theme/index';
import { HeadlineSize } from '../../utils/enums';

export interface HeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  size: HeadlineSize | keyof typeof HeadlineSize;
  color?: BaseThemeColor | string;
  fontWeight?: BaseTokensFontWeight | number;
}

export const Headline = styled.div<HeadlineProps>(
  ({ theme: { base }, size, color, fontWeight }) => css`
    font-family: ${base.fontFamily.Roboto};
    font-weight: ${fontWeight ?? base.fontWeight.bold};
    font-style: normal;
    line-height: ${base.lineHeight.headline};
    color: ${color ?? base.color.text.headline.default};

    ${size === HeadlineSize.One &&
      `
      font-size: ${base.fontSize.headline.one}rem;
    `}
  `
);
