## UseMemo Hook and useCallback Hook

function that takes alot of time to execute.
fetching thousands of items, mapping that array, filtering array, sorting array.

lets introduce some slowness in our isEven function.

```js
const isEven = useMemo(() => {
  let i = 0;
  while (i < 2000000000) {
    i++;
  }
  return counterOne % 2 === 0;
}, [counterOne]);
```

`Both the useCallback and useMemo hooks in React are designed to optimize performance by preventing unnecessary re-computations and re-renders.`

- usecallback caches provided function instance itself (to avoid unneccessary re-renders)
- useCallback hook is used to avoid unnecessary re-renders of child components.

- usememo invokes provided function and caches its result (to avoid extensive re-computations)
- useMemo hook is used to avoid time consuming function to execute unnecessarily.

# useMemo Hook:

The useMemo hook is used to memoize values. It returns a memoized value that is recalculated only when its dependencies change. This can help optimize calculations or data transformations that are performed within a component.

```js
const memoizedValue = useMemo(() => {
  // Value calculation or transformation
  return calculatedValue;
}, [dependency1, dependency2]);
```

### Usage:

Use useMemo when you have expensive calculations, computations, or data transformations that depend on specific values from your component's scope. By memoizing these values, you prevent them from being recalculated unnecessarily, which can improve performance.

# useCallback Hook:

The useCallback hook is used to memoize functions. It returns a memoized version of a function, which means that the function will only be recreated if its dependencies change. This can help prevent unnecessary re-renders of child components that receive these functions as props.

```js
const memoizedFunction = useCallback(() => {
  // Function logic
}, [dependency1, dependency2]);
```

### Usage:

This hook is primarily used to avoid unnecessary re-renders of components due to function reference changes. In React, when a component re-renders, its child components re-render as well. If you pass a new function reference as a prop to a child component on each render, it might trigger unnecessary re-renders of that child component. By memoizing the function with useCallback, you ensure that the same function reference is used across renders unless its dependencies change. This optimization can prevent unnecessary child component re-renders.
