import { useState } from 'react';

const Home = () => {

  const [name, setName] = useState('X');
  const [age, setAge] = useState('20')

  const handleClick = () => {
    console.log("Button clicked.");
    setName('Y');
    setAge('25'); 
    console.log("States changed.");
  }

  return (
    <div className="home">
      <h2> Homepage </h2>
      <p> { name } is { age } years old. </p>
      <button onClick={ handleClick }> Click Me </button>
    </div>
  );
}

export default Home;
