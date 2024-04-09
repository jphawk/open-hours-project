import React from 'react';
import { useTheme } from 'styled-components';
import { CardWrapper, HeaderWrapper } from './Card.styles';
import { CardSection } from '../CardSection';
import { ClockIcon } from '../icons';
import { Divider } from '../Divider';
import { Headline } from '../typography';
import { HeadlineSize, dayNames } from '../../utils/enums';

interface OpeningHour {
  type: 'open' | 'close';
  /** opening / closing time as seconds past midnight */
  value: number;
}

export interface OpeningHours {
  [day: string]: OpeningHour[];
}

interface CardProps {
  openingHours: OpeningHours;
}

export const Card: React.FC<CardProps> = (props) => {
  const theme = useTheme();
  const { openingHours } = props;

  const currentDayOfWeek = new Date().getDay();

  /** Get the name of a day of a week */
  const currentDayName = dayNames[currentDayOfWeek];

  const formatTime = (seconds: number): string => {
    const hour = Math.floor(seconds / 3600);
    /** reminder of seconds divided by 60 to calculate minutes */
    const minute = Math.floor((seconds % 3600) / 60);
    const period = hour < 12 ? 'AM' : 'PM';
    const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    /** padStart is needed to ensure that minutes are always represented with two digits, padStart can only be applied to strings */
    const minuteStr =
      minute === 0 ? '' : `:${minute.toString().padStart(2, '0')}`;
    return `${hour12}${minuteStr} ${period}`;
  };

  const formatOpeningHours = (
    openingHours: OpeningHour[],
    nextDayClosingTime: number | null = null
  ): string => {
    let result = '';
    let openTime: number | null = null;

    openingHours.forEach((hour) => {
      if (hour.type === 'open') {
        /** Set the open time */
        openTime = hour.value;
      } else if (hour.type === 'close' && openTime != null) {
        /**  We have a matching open-close pair */
        result += `${formatTime(openTime)} - ${formatTime(hour.value)}, `;
        /** Reset open time for the next pair */
        openTime = null;
      }
    });

    if (openTime !== null) {
      /** Handle the case where the day ends with an open time (closing extends to the next day) */
      if (nextDayClosingTime != null) {
        /** Use the closing time from the next day if available */
        result += `${formatTime(openTime)} - ${formatTime(
          nextDayClosingTime
        )}, `;
      } else {
        /** If no closing time is provided, consider it as closing at the end of the day */
        result += `${formatTime(openTime)} - Closed, `;
      }
    }
    /** Remove the last comma and space */

    return result ? result.slice(0, -2) : 'Closed';
  };

  return (
    <CardWrapper>
      <HeaderWrapper>
        <ClockIcon />
        <Headline size={HeadlineSize.One} as='h2'>
          Opening hours
        </Headline>
      </HeaderWrapper>
      <Divider color={theme.base.color.border.accent} />
      {Object.entries(openingHours).map(([day, hours], index, arr) => {
        /** Get the next day's hours, wrapping around to the first day if necessary, e.g. if Sunday opening hours are 10am - 1am */
        const nextDayHours = arr[(index + 1) % arr.length][1];
        /** Find the next day's first closing time if it exists */

        const nextDayClosingTime =
          nextDayHours.find((hour) => hour.type === 'close')?.value || null;

        return (
          <CardSection
            key={day}
            /** First letter to capital */
            day={day.charAt(0).toUpperCase() + day.slice(1)}
            time={
              hours.length
                ? formatOpeningHours(hours, nextDayClosingTime)
                : 'Closed'
            }
            isToday={currentDayName === day}
          />
        );
      })}
    </CardWrapper>
  );
};
