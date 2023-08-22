import ReactDOM from 'react-dom/client';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <FocusInput />
      <ClassTimer />
      <HookTimer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
