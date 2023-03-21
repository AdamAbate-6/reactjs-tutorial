import {useState, useEffect} from 'react';
import './App.css';

const Person = (props) => {
  // This is a component. Can be injected elsewhere by <Person />.
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  const name = 'John';
  const isNameShowing = false;

  // Function starts with `use` so is called a hook.
  //  We are destructuring useState() into variables within array [].
  //  Follow the name of a variable with its setter.
  const [counter, setCounter] = useState(0);

  // Arrow function within useEffect() runs on page load.
  useEffect(() => {
    // Below is a big no-no. Never modify state manually.
    // counter = 100;

    // setCounter(100);
    alert("You've changed the  counter to " + counter)
  }, [counter]);
  // ^ Second parameter to useEffect is DependencyList. If it is null, function in first argument
  //  is called every time state changes. If it is empty, function is called when page reloads.
  //  If DependencyList has a variable in it (not sure about others, but definitely works for state),
  //  then function is called every time variable changes. Note: changing variable in function that 
  //  is in the dependency list causes an infinite loop.

  return (
    
    // Can inject JS code into JSX tag like so.
    <div className="App">
      <h1>Hello, {isNameShowing ? name : 'someone'}</h1>

      <button onClick={() => setCounter((prevCount => prevCount - 1))}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount => prevCount + 1))}>+</button>

      <Person name={'John'} lastName={'Doe'} age={'31'}/>
      <Person 
        name={'John'} 
        lastName={'Doe'} 
        age={2+2}
      />

      {name ? (
        // Can also render larger blocks of multiple tags with JSX {}.
        <>
          test
        </>
      ) : (
        // In order to have multiple adjacent JSX elements, have to wrap them in JSX tag <></>. 
        // This is a React block. It returns multiple lines of JSX within JavaScript.
        <>
          <h1>test</h1>
          <h2>There is no name</h2>  
        </>
      )}

    </div>
  );
}

export default App;
