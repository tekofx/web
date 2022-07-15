import { TerminalContextProvider } from "react-terminal";
import { ReactTerminal } from "react-terminal";


export default function Terminal() {
    const commands = {
        cd: (directory) => `changed path to ${directory}`,
        ls: "uwu owo ewe ",
        help: (<span>
            <strong>clear</strong> - clears the console. <br />
            <strong>ls</strong> - shows folder. <br />
        </span>),
    };

    const themes = {
        default: {
            themeBGColor: "#272B36",
            themeToolbarColor: "#DBDBDB",
            themeColor: "#FFFEFC",
            themePromptColor: "#a917a8"
        }
    }

    return (
        < TerminalContextProvider >

            <ReactTerminal
                commands={commands}
                themes={themes}
                theme="default"
                welcomeMessage={<span>Type help for available commands<br /></span>}
                showControlBar={false}
            />
        </TerminalContextProvider >
    )

}