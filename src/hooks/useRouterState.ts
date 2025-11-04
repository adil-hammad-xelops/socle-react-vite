import { useState } from 'react';

/**
 * Custom hook for managing theme mode
 */
export function useThemeMode() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { themeMode, setThemeMode, toggleTheme };
}

/**
 * Custom hook for managing mobile menu state
 */
export function useMenuState() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  return { menuOpen, setMenuOpen, toggleMenu, closeMenu, openMenu };
}

