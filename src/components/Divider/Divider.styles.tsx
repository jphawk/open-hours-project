import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { BaseThemeColor } from '../../theme';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  color?: BaseThemeColor | string;
}

export const Divider = styled.div<DividerProps>`
  ${({ theme: { base }, color }) => css`
    width: 100%;
    height: 1px;
    background-color: ${color ?? base.color.border.default};
  `}
`;
