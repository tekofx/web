import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Projects from './pages/Projects';
import Theme from './Theme';
import { ThemeProvider } from '@mui/material/styles';
import Appbar from './components/Appbar';
import Footer from './components/Footer';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import './index.css';
import routes from './routes.json';


function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={Theme}>
      <Appbar />
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes >
            <Route path='/' element={<Navigate to={routes.home} />} />
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.gallery} element={<Gallery />} />
            <Route path={routes.projects} element={<Projects />} />
            <Route path={routes.about} element={<About />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
