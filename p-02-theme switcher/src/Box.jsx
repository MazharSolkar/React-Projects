import moment from 'moment';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Box = ({ title, snippet, date, length }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className='post'>
      <h2>
        {title}
        {theme === 'dark-theme'
          ? '(dark-mode enabled)'
          : '(light-mode enabled)'}
      </h2>
      <div className='post-info'>
        <span>{moment(date).format('dddd Do, YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </div>
  );
};

export default Box;
