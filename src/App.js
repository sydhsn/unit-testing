import React, { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Async from './components/Async';
import Forms from './Form/Forms';

function App() {
  const [count, setCount] = useState(0);

  // list data 
  const [list, setList] = useState();

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const loaddata = () => {
    setTimeout(setList("Saiyad Husain"),3000);
  }

  return (
    <div className="container">
      <div className='row'>
        <Greeting/>
      </div>
      <div className='row'>
        <div className='col-sm-4 m-auto mt-2'>
        <button className="btn btn-primary" onClick={increment}>+</button>
        <p data-testid="counter-p" className='text-primaty mt-3'>Counter:{count}</p>
        <button className="btn btn-primary" onClick={decrement}>-</button>
        </div>
      </div>
      <div className='row'>
        <Forms/>
      </div>
      <button onClick={loaddata} name="loadData" className="btn btn-sm start-50 mt-5 btn-primary">Load Data</button>
      <div className='row'>
        { list ?
        <ul><li data-testid="list-item">{list}<br/></li></ul> :
        null
        }
      </div>
      <div className='row'>
        <Async/>
      </div>
    </div>
  );
}

export default App;
