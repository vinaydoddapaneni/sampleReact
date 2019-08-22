import React from 'react';
import './App.css';
import { Button } from './components/Buttons';
import { Textfield } from './components/Textfield';

function App() {
  return (
    <div className="">
      <div className='row'>
        <div className='col-3 offset-4'>
      <h1>welcome to JSX Please Login</h1><br/>
      <form>
      <Textfield text='email' place='Please enter email'/><br/>
      <Textfield text='password' place='Please enter password'/><br/>
      <Button/>
      </form>
      </div>
      </div>
    </div>
  );
}

export default App;
