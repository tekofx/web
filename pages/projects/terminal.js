import { ReactTerminal } from "react-terminal";
import { TerminalContextProvider } from "react-terminal";

export default function App() {
    // Define commands here
    const commands = {
        whoami: "jackharper",
        cd: (directory) => `changed path to ${directory}`
    };

    return (
        <TerminalContextProvider>
            <ReactTerminal
                commands={commands}
                themes={{
                    "default": {
                        themeBGColor: "#272B36",
                        themeToolbarColor: "#DBDBDB",
                        themeColor: "#FFFEFC",
                        themePromptColor: "#a917a8"
                    }
                }}
                theme="default"
            />
        </TerminalContextProvider>
    );
}