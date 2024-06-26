'use client';

import { ThemeProvider } from 'next-themes';

export function ThemeContext({ children }) {
  return <ThemeProvider attribute="data-theme">{children}</ThemeProvider>;
}
