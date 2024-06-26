'use client';

import { useTheme } from 'next-themes';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '@/_constants/strings';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() =>
        setTheme(currentTheme === darkTheme ? lightTheme : darkTheme)
      }
    >
      <span className="text-xl hover:text-primary">
        {currentTheme === darkTheme ? <BsSun /> : <BsMoon />}
      </span>
    </button>
  );
};
