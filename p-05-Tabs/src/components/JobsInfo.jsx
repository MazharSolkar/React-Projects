import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const JobsInfo = ({ currentItem, jobs }) => {
  const { company, dates, duties, title } = jobs[currentItem];
  //   console.log(company, title, dates);
  return (
    <article className='p-2 my-2 rounded-xl border-2 border-slate-200'>
      <h1>{title}</h1>
      <button className='bg-yellow-600 my-2 py-0.5 px-2 text-xs rounded-md'>
        {company}
      </button>
      <h3>{dates}</h3>
      <div>
        {duties.map((duty) => (
          <li key={uuidv4()} className='py-2'>
            {duty}
          </li>
        ))}
      </div>
    </article>
  );
};

export default JobsInfo;
