import { BaseTheme, BaseThemeColor } from '../../theme';

export interface DefaultIconProps extends React.SVGAttributes<SVGElement> {
  width?: string;
  height?: string;
  viewBox?: string;
  color?: BaseThemeColor | string;
}

export const ClockIcon: React.FC<DefaultIconProps> = ({ color, ...props }) => (
  <svg fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

ClockIcon.defaultProps = {
  width: '1.5em',
  height: '1.5em',
  viewBox: '0 0 24 24',
  color: BaseTheme.color.icon.default,
};
