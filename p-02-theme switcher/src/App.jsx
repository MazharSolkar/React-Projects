import './App.css';
import data from './data';
import Box from './Box';
import Navbar from './Navbar';
import ThemeContext from './ThemeContext';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('userSelectedTheme') || 'dark-theme'
  );

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme }}>
      <main>
        <Navbar />
        <section className='articles'>
          {data.map((item) => (
            <Box key={item.id} {...item} />
          ))}
        </section>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
