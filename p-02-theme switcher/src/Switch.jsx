import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Switch = ({ checked, onChange }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <label htmlFor='mode-changer' style={{ fontSize: '3rem' }}>
        {theme === 'dark-theme' ? '☀️' : '🌛'}
      </label>
      <input
        id='mode-changer'
        type='checkbox'
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default Switch;
