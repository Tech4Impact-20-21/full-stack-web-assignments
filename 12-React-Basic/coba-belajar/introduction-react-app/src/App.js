// import logo from './logo.svg';
// import './App.css';
import React from "react";
import ClassComponent from './components/ClassComponent.jsx';
import ButtonClass from './components/ButtonClass.jsx';
import Notification from "./components/Notification.jsx";
import Listname from "./components/ListName.jsx";
import FormComponent from "./components/FormComponent.jsx";

const users = [
  {id : '1', firstname:'Agus', lastname:'Cuguy'},
  {id : '2', firstname:'Said', lastname:'Cihuy'}
]

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <ClassComponent></ClassComponent>
      <ButtonClass></ButtonClass>
      <Notification status="warning"></Notification>
      <Listname data={users} />
      <FormComponent></FormComponent>
    </div>
  );
}

export default App;
