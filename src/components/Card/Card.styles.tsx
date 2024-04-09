import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  ${({
    theme: {
      base: { spacing, borderRadius, color, breakpoints },
    },
  }) => css`
    width: 100%;
    max-width: 22rem;
    padding: ${spacing.space4}rem;
    border-radius: ${borderRadius.sm}rem;
    box-shadow: 0px 6px 15px -3px ${color.border.shadow};
    background-color: ${color.surface.overlay};
    place-self: center;

    @media screen and (min-width: ${breakpoints.md}) {
      padding: ${spacing.space8}rem;
    }
  `}
`;

export const HeaderWrapper = styled.div`
  ${({
    theme: {
      base: { spacing },
    },
  }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${spacing.space3}rem;
    svg {
      margin-right: ${spacing.space3}rem;
    }
  `}
`;
