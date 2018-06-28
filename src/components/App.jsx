import React from 'react'
import Header from './Header';
import Router from './Router';
import { Switch, Route } from 'react-router-dom';

function App(){
  return(
    <div>
      <style jsx global>{`
          *{
            padding: 0;
            margin: 0;
          }
          *:focus{
            outline: none;
          }
      `}</style>
      <Router/>
    </div>
  );
}

export default App
