import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Ooops !!!</h1>
      <h2>Something went wrong</h2>
      <h1>
        {err.status} {err.data}
      </h1>
    </div>
  );
};

export default ErrorPage;
