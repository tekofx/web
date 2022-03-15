import './App.css';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
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
                        <Route path='/about' element={<AboutMe />} />
                        <Route path='/contact' element={<Contact />} />


                    </Routes>

                </div>
            </Router>
        </>
    );
}

export default App;
