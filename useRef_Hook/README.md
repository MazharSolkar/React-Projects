# useRef Hook (web dev simplifed blog)

useRef hook returns an object with single property current(which is set to the current value of the ref).

```javascript
const myRef = useRef(0);
console.log(myRef);

//{current: 0}
```

- With useRef Hook we can directly manipulate actual DOM.
- For doing so we only need to set ref attribute on the element we want to manipulate.

```javascript
function Component() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

- useRef can store value between renders, and useRef doesn't cause rerender when it is changed like useEffect.

- normal variables value is reset when component is re-rendered, useRef persist the value between renders.

> This component uses a ref to keep track of how many times the button was clicked. Note that it’s okay to use a ref instead of state here because the click count is only read and written in an event handler.

```javascript
import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return <button onClick={handleClick}>Click me!</button>;
}
```

# HOW useRef should not be used

- Do not write or read ref.current during rendering.

```javascript
function MyComponent() {
  // ...
  // 🚩 Don't write a ref during rendering
  myRef.current = 123;
  // ...
  // 🚩 Don't read a ref during rendering
  return <h1>{myOtherRef.current}</h1>;
}
```

- You can read or write refs from event handlers or effects instead.

```javascript
function MyComponent() {
  // ...
  useEffect(() => {
    // ✅ You can read or write refs in effects
    myRef.current = 123;
  });
  // ...
  function handleClick() {
    // ✅ You can read or write refs in event handlers
    doSomething(myOtherRef.current);
  }
  // ...
}
```

- **_If you have to read or write something during rendering, use state instead._**

<!-- ============== -->

# NOTE: (References)

- Web dev simplified blog

- react docs

- pitfall on react docs how it should not be used.

<!-- ============== -->
