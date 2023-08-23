import React from "react";
import { useQRCode } from "next-qrcode";

interface Props {
  text: string;
}

function App(props: Props) {
  const { Canvas } = useQRCode();

  return (
    <Canvas
      text={props.text}
      options={{
        level: "L",
        margin: 1,
        scale: 4,
        width: 60,
        color: {
          dark: "#000000FF",
          light: "#FFFFFFFF",
        },
      }}
    />
  );
}

export default App;
