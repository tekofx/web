import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experimental from "./pages/Experimental";
import Fursona from "./pages/Fursona";
import Theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import Appbar from "./components/Appbar";
import BottomAppbar from "./components/BottomAppbar";
import Footer from "./components/Footer";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import routes from "./routes.json";
import Cookies from "universal-cookie";
import { Box } from "@mui/material";
const cookies = new Cookies();

// Default language en
if (cookies.get("lang") === undefined) {
  cookies.set("lang", "en");
}

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={Theme}>
      <Appbar />
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.gallery} element={<Gallery />} />
            <Route path={routes.projects} element={<Projects />} />
            <Route path={routes.about} element={<About />} />
            <Route path={routes.fursona} element={<Fursona />} />
            <Route path={routes.experimental} element={<Experimental />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <BottomAppbar />
      <Footer />
      {/*This box is to create a little space in mobile view, that lets footer show above BottomAppbar */}
      <Box
        height={100}
        sx={{
          display: { md: "none", lg: "none" },
        }}
      />
    </ThemeProvider>
  );
}

export default App;
