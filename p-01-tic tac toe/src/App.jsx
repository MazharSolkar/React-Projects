import { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // const itemsArray = new Array(9).fill('empty');
  const [itemsArray, setItemsArray] = useState(new Array(9).fill('empty'));
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  const winLogic = () => {
    if (
      itemsArray[0] !== 'empty' &&
      itemsArray[0] === itemsArray[1] &&
      itemsArray[1] === itemsArray[2]
    ) {
      setWinMessage(`${itemsArray[0]} won`);
    } else if (
      itemsArray[3] !== 'empty' &&
      itemsArray[3] === itemsArray[4] &&
      itemsArray[4] === itemsArray[5]
    ) {
      setWinMessage(`${itemsArray[3]} won`);
    } else if (
      itemsArray[6] !== 'empty' &&
      itemsArray[6] === itemsArray[7] &&
      itemsArray[7] === itemsArray[8]
    ) {
      setWinMessage(`${itemsArray[6]} won`);
    } else if (
      itemsArray[0] !== 'empty' &&
      itemsArray[0] === itemsArray[3] &&
      itemsArray[3] === itemsArray[6]
    ) {
      setWinMessage(`${itemsArray[0]} won`);
    } else if (
      itemsArray[1] !== 'empty' &&
      itemsArray[1] === itemsArray[4] &&
      itemsArray[4] === itemsArray[7]
    ) {
      setWinMessage(`${itemsArray[1]} won`);
    } else if (
      itemsArray[2] !== 'empty' &&
      itemsArray[2] === itemsArray[5] &&
      itemsArray[5] === itemsArray[8]
    ) {
      setWinMessage(`${itemsArray[2]} won`);
    } else if (
      itemsArray[0] !== 'empty' &&
      itemsArray[0] === itemsArray[4] &&
      itemsArray[4] === itemsArray[8]
    ) {
      setWinMessage(`${itemsArray[0]} won`);
    } else if (
      itemsArray[2] !== 'empty' &&
      itemsArray[2] === itemsArray[4] &&
      itemsArray[4] === itemsArray[6]
    ) {
      setWinMessage(`${itemsArray[2]} won`);
    }
  };

  const changeItem = (itemNumber) => {
    // console.log('clicked');
    if (itemsArray[itemNumber] === 'empty') {
      const newArray = [...itemsArray];
      newArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
      setItemsArray(newArray);
    } else {
      toast('✋ already filled!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
      });
    }
    // winLogic();
  };

  useEffect(() => {
    winLogic();
  }, [itemsArray]);

  return (
    <div className='container-all'>
      <div className='heading'>
        {winMessage ? (
          <div>
            <button>{winMessage}</button>
            <button
              onClick={() => {
                setIsCross(false);
                setWinMessage('');
                itemsArray.fill('empty');
              }}>
              Reload
            </button>
            {toast.success(`🎉🎉🎉 ${winMessage}`, {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: 'dark',
            })}
          </div>
        ) : (
          <button>{isCross ? 'cross' : 'circle'}'s turn to play</button>
        )}
      </div>
      <div className='container'>
        {itemsArray.map((item, index) => (
          <div
            key={index}
            className='box-wrapper'
            onClick={() => {
              changeItem(index);
            }}>
            <Card name={item} />
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
