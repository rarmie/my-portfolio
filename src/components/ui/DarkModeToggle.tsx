'use client';
import { useTheme } from '@/components/layout/ThemeProvider';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      {theme === 'dark' ? (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4a1 1 0 011-1V2a1 1 0 00-2 0v1a1 1 0 011 1zm0 16a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm8-8a1 1 0 001 1h1a1 1 0 000-2h-1a1 1 0 00-1 1zM3 11H2a1 1 0 000 2h1a1 1 0 000-2zm13.66-6.07a1 1 0 00-1.41 1.41l.71.71a1 1 0 001.41-1.41l-.71-.71zM6.34 17.66l-.71.71a1 1 0 001.41 1.41l.71-.71a1 1 0 00-1.41-1.41zm11.32 0a1 1 0 00-1.41 1.41l.71.71a1 1 0 001.41-1.41l-.71-.71zM6.34 6.34l-.71-.71a1 1 0 00-1.41 1.41l.71.71a1 1 0 001.41-1.41zM12 7a5 5 0 100 10A5 5 0 0012 7z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
}