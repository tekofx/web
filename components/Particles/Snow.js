import { useCallback, useRef } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadSnowPreset } from "tsparticles-preset-snow";
import Presentation from "../Presentation";
export default function App() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadSnowPreset(engine);
        //await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div>

            <Particles
                width="400px"
                height="70%"
                id="tsparticles"
                init={particlesInit}

                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        detectsOn: "window",
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -5,
                    },
                    preset: "snow",
                }
                }
            />
        </div>


    );
};