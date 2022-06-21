import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Container from '@mui/material/Container';
const config = require('./options.json')
const App = () => {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (

        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            height='400px'

            options={config}
        />

    );
};

export default App;