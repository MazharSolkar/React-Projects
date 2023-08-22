import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import JobsInfo from './components/JobsInfo';
import Button from './components/Button';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(1);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const response = await fetch('https://course-api.com/react-tabs-project');
    const newJobs = await response.json();
    console.log(newJobs);
    setJobs(newJobs);
    setIsLoading(false);
  };

  if (isLoading) {
    return <h1> wait Loading ...</h1>;
  }
  return (
    <section>
      <div className='flex justify-center'>
        {jobs.map((job, index) => (
          <Button
            key={uuidv4()}
            index={index}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}>
            {job.company}
          </Button>
        ))}
      </div>
      <div className='w-10/12 max-w-4xl m-auto'>
        <JobsInfo key={uuidv4()} currentItem={currentItem} jobs={jobs} />
      </div>
    </section>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
