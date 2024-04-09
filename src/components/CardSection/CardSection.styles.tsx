import styled, { css } from 'styled-components';
import { Label } from '../typography';

export const SectionWrapper = styled.div``;

export const SectionInnerContent = styled.div`
  ${({
    theme: {
      base: { spacing },
    },
  }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${spacing.space2}rem 0;
  `}
`;

export const LeftSideSection = styled.div`
  ${({
    theme: {
      base: { spacing },
    },
  }) => css`
    margin-right: ${spacing.space4}rem;
  `}
`;

export const StyledTodayLabel = styled(Label)`
  ${({
    theme: {
      base: { spacing },
    },
  }) => css`
    margin-left: ${spacing.space3}rem;
  `}
`;

export const RightSideSection = styled.div`
  max-width: 8rem;
  text-align: right;
`;
