import React from 'react';

const Count = ({ text, count }) => {
  console.log(`Rendering ${text} - ${count}`);
  return (
    <h2>
      {text} - {count}
    </h2>
  );
};

export default React.memo(Count);
