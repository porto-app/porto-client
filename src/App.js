import React from 'react';
import './App.css';
//import { } from 'react-router-dom'
//import { } from 'react-bootstrap'


import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Main from './Components/Main';



function App() {
  return (
    <div>
     <header>
        <Header />
     </header>
     <main>
       <Main />
     </main>
     <footer>
        <Footer />
     </footer>
    </div>
  );
}

export default App;
