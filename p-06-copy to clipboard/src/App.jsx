import ReactDOM from 'react-dom/client';

const App = () => {
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to clipboard');
      } catch (error) {
        toast.error('Failed to copy color to clipboard');
      }
    } else {
      toast.error('Clipboard access not available');
    }
  };

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
