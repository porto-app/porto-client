import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DataContext } from './Components/DataContext';
import About from './Components/About'
import CreateProfile from './Components/CreateProfile';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header';
import Main from './Components/Main';
import Navi from './Components/Navi';
import Profile from './Components/Profile'
import SearchResults from './Components/SearchResults';
import './App.css';


function App() {

    const [profiles, setProfiles] = useState([])
    const [currentProfileId, setCurrentProfileId] = useState("");
    const [activeProfile, setActiveProfile] = useState("");
    const [search, setSearch] = useState('')
    const [filteredProfiles, setFilteredProfiles] = useState('')

    return (
        <div className="App">
            <DataContext.Provider value={{ profiles, setProfiles, currentProfileId, setCurrentProfileId, activeProfile, setActiveProfile, search, setSearch, filteredProfiles, setFilteredProfiles }}>
                <Router>
                <Header />
                <Navi />
                <Route exact path='/' component={Main} />
                <Route exact path='/about' component={About} />
                <Route exact path='/profile/:id' component={Profile} />
                <Route exact path='/searchresults' component={SearchResults} />
                <Route exact path='/createprofile' component={CreateProfile} />
                <Footer />
                </Router>
            </ DataContext.Provider>
        </div>
    );
}

export default App;
