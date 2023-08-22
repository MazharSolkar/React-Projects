# NOTE : First study useMemo hook

### `React.memo is higher order function that prevent functional component from re-render if its state and props are not changed.`

While exporting wrap your component inside React.memo(`<comp />`).
Once you wrap your component inside React.memo() it will only re-render if it's `state` or `props` are changed.

### Referential Equality (chat gpt) (for object, functions and arrays)

while dealing with functions we always have to consider reference equality, even though two functions have exact same behaviour it doesn't mean they are equal to each other.

function before the re-render is different from function after the re-render.

since function is passed as prop React.memo see's it as prop and cause component re-render.

this is same with incrementSalary button click on incrementSalary there is new incrementAge function is created, which cause incrementAge button to re-render.

How to tell react there is no need of creating new increamentAge function when we update the salary. (answer useCallback hook)

### useCallback Hook

This hook memoizes callback function.

```js
import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';
import Title from './Title';

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = () => {
    setAge(age + 1);
  };

  const incrementSalary = () => {
    setSalary(salary + 1000);
  };

  return (
    <div>
      <Title />
      <Count text='Age' count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text='Salary' count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default ParentComponent;
```

## Code execution explanation

Without using useCallback, the functions incrementAge and incrementSalary are created anew on every render of the ParentComponent. This happens because the functions are defined inside the component body and depend on the age and salary state values.

Here's a visualization of the execution flow:

1. The initial render of ParentComponent takes place.

2. Inside the component, the incrementAge and incrementSalary functions are defined, capturing the current values of age and salary.

3. When the "Increment Age" or "Increment Salary" buttons are clicked, the respective function is executed, and within those functions, the setAge or setSalary function updates the state.

4. Updating the state triggers a re-render of ParentComponent, causing new instances of the incrementAge and incrementSalary functions to be created. This happens because the component's closure captures the new state values.

In this scenario, each time the buttons are clicked, the functions are re-created. This can lead to unnecessary re-renders of your components, particularly if you're passing these functions down to child components.

Using the useCallback hook as you originally did in your code memoizes these functions, preventing them from being re-created unless their dependencies (age or salary) change. This optimization can help avoid unnecessary re-renders in your components, especially when you pass these functions to child components.
