import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardSection } from './CardSection';
import ThemeWrapper from '../../utils/ThemeWrapper';

describe('CardSection component', () => {
  it('renders the day and time', () => {
    render(
      <ThemeWrapper>
        <CardSection day='Monday' time='9 AM - 5 PM' />
      </ThemeWrapper>
    );

    expect(screen.getByText('Monday')).toBeInTheDocument();
    expect(screen.getByText('9 AM - 5 PM')).toBeInTheDocument();
  });

  it('shows "Today" when isToday is true', () => {
    render(
      <ThemeWrapper>
        <CardSection day='Monday' time='9 AM - 5 PM' isToday />
      </ThemeWrapper>
    );

    expect(screen.getByText('Today')).toBeInTheDocument();
  });

  it('does not show "Today" when isToday is false', () => {
    render(
      <ThemeWrapper>
        <CardSection day='Tuesday' time='10 AM - 6 PM' />
      </ThemeWrapper>
    );

    expect(screen.queryByText('Today')).toBeNull();
  });

  it('passes additional HTML attributes to the component', () => {
    render(
      <ThemeWrapper>
        <CardSection
          day='Wednesday'
          time='Closed'
          aria-label='wednesday-schedule'
        />
      </ThemeWrapper>
    );

    expect(screen.getByLabelText('wednesday-schedule')).toBeInTheDocument();
  });

  it('applies disabled styling when time is "Closed"', () => {
    const { getByText } = render(
      <ThemeWrapper>
        <CardSection day='Thursday' time='Closed' />
      </ThemeWrapper>
    );

    const closedText = getByText('Closed');
    expect(closedText).toBeInTheDocument();
    expect(closedText).toHaveStyle('color: #A1A2A4');
  });
});
