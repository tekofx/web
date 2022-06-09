import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Projects from './pages/Projects';
import Theme from './Theme';
import { ThemeProvider } from '@material-ui/core';
import Appbar from './components/Appbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './index.css';
import routes from './routes.json';


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Appbar />
        <Routes >
          <Route path='/' element={<Navigate to={routes.home} />} />
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.gallery} element={<Gallery />} />
          <Route path={routes.projects} element={<Projects />} />
          <Route path={routes.about} element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
