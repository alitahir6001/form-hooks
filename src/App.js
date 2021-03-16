import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
// import Results from './components/Results'
// import UserForm from './components/UserForm'
// import ValidationForm from './components/ValidationForm'

function App() {
  const [ state, setState ] = useState({
    firstName: "",
    lastName: "",
    email: "",          // Use this object to setup initial input fields
    password: "",
    confirmPassword: ""
  });

  return (
    <div className="App">

      <Form inputs = {state} setInputs = {setState} />
      {/* <UserForm inputs= {state} setInputs={setState}/> */}
      {/* <Results data={state}/> */}
    </div>
  );
}

export default App;
