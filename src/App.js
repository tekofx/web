import './App.css';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/projects' element={<Projects />} />

            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />


          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
