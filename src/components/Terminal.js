import { TerminalContextProvider } from "react-terminal";
import { ReactTerminal } from "react-terminal";


export default function Terminal() {
    const commands = {
        whoami: "jackharper",
        cd: (directory) => `changed path to ${directory}`
    };

    return (
        < TerminalContextProvider >

            <ReactTerminal
                commands={commands}
            />
        </TerminalContextProvider >
    )

}