import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BaseTheme } from '../theme';

import GlobalStyleNormalization from './GlobalStyleNormalization';

const combinedTheme = { base: BaseTheme };

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => (
  <ThemeProvider theme={combinedTheme}>
    <GlobalStyleNormalization />
    {children}
  </ThemeProvider>
);

export default ThemeWrapper;
