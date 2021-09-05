import React from 'react';
import './App.css';
import { BrowserRouter as Route } from 'react-router-dom';
import Header from './Components/Header';
import Navi from './Components/Navi';
import Main from './Components/Main';
import About from './Components/About'
import Profile from './Components/Profile'
import SearchResults from './Components/SearchResults';
import { DataContext } from './Components/DataContext';
import Footer from './Components/Footer.jsx';


function App() {
  return (
    <div>
     <DataContext.Provider>
        <Header />
        <Navi />
        <Route exact path='/' component={Main} />
        <Route exact path='/about' component={About} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/searchresults' component={SearchResults} />
        <Footer />
      </DataContext.Provider>
    </div>
  );
}

export default App;
