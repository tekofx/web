import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Projects from './pages/Projects';
import Theme from './Theme';
import { ThemeProvider } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
