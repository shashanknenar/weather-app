import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Logo from './components/Logo/Logo';

function App() {
 return (
   <div className="App">
     <header className="App-header">
     <Logo />
       <h1>Hawa with ReactJS</h1>
     </header>
     <main>
       <Forecast />
     </main>
     <footer>
       Page created by Shashank N
     </footer>
   </div>
 );
}

export default App;