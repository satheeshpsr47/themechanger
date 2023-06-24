import './App.css';
import Main from './main';
import Navbar from './navbar';
import React from 'react';

export default function App() {
  const[dark,setdark] = React.useState(false)
  function toggle(){
    setdark((prev) => !prev)
  }
  return (
    <div className="container">
      <Navbar toggler = {toggle} darkmode = {dark}/>
      <Main darkmode ={dark}/>
    </div>
  );
}


