import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card, OpeningHours } from './Card';
import ThemeWrapper from '../../utils/ThemeWrapper';
import { openingHours } from '../../utils/data';

describe('Card component', () => {
  it('renders correctly with opening hours', () => {
    render(
      <ThemeWrapper>
        <Card openingHours={openingHours as OpeningHours} />
      </ThemeWrapper>
    );

    // Check for Tuesday's opening hours
    expect(screen.getByText('Tuesday')).toBeInTheDocument();
    expect(screen.getByText('10:30 AM - 6 PM')).toBeInTheDocument();

    // Check for Friday's opening hours
    expect(screen.getByText('Friday')).toBeInTheDocument();
    expect(screen.getByText('10 AM - 2 AM')).toBeInTheDocument();
  });

  it('displays "Closed" for days without opening hours', () => {
    render(
      <ThemeWrapper>
        <Card openingHours={{ wednesday: [] }} />
      </ThemeWrapper>
    );

    expect(screen.getByText('Wednesday')).toBeInTheDocument();
    expect(screen.getByText('Closed')).toBeInTheDocument();
  });
});
