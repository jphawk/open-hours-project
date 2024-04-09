import React, { HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';
import { Divider } from '../Divider/Divider.styles';
import { Label } from '../typography/Label';
import {
  SectionWrapper,
  SectionInnerContent,
  LeftSideSection,
  RightSideSection,
  StyledTodayLabel,
} from './CardSection.styles';
import { LabelSize } from '../../utils/enums';

export interface CardSectionProps extends HTMLAttributes<HTMLDivElement> {
  day: string;
  time: string;
  isToday?: boolean;
}

export const CardSection: React.FC<CardSectionProps> = (props) => {
  const { day, time, isToday, ...rest } = props;
  const theme = useTheme();

  return (
    <SectionWrapper {...rest}>
      <SectionInnerContent>
        <LeftSideSection>
          <Label size={LabelSize.One}>{day}</Label>
          {isToday && (
            <StyledTodayLabel size={LabelSize.Two}>Today</StyledTodayLabel>
          )}
        </LeftSideSection>
        <RightSideSection>
          <Label
            size={LabelSize.One}
            fontWeight={theme.base.fontWeight.regular}
            disabled={time === 'Closed'}
          >
            {time}
          </Label>
        </RightSideSection>
      </SectionInnerContent>
      <Divider />
    </SectionWrapper>
  );
};
