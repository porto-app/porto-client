import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Main from './Components/Main';



function App() {
  return (
    <div className="App">
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
