import { useContext, useEffect } from 'react';
import ThemeContext from './ThemeContext';
import Switch from './switch';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    theme === 'dark-theme' ? setTheme('light-theme') : setTheme('dark-theme');
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('userSelectedTheme', theme);
  }, [theme]);

  return (
    <div className='nav-center'>
      <h1>Overreacted</h1>
      <Switch checked={theme === 'dark-theme'} onChange={toggleTheme} />
    </div>
  );
};

export default Navbar;
