import './App.css';
import Nav from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
        <Nav/>
        <Home/>
        <About/>
        <Awards/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
