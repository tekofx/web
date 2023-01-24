import React from 'react';
import { useQRCode } from 'next-qrcode';

function App() {
  const { Canvas } = useQRCode();

  return (
    <Canvas
      text='https://github.com/Bunlong/next-qrcode'
      options={{
        level: 'L',
        margin: 1,
        scale: 4,
        width: 60,
        color: {
          dark: '#000000FF',
          light: '#FFFFFFFF',
        }
      }}

    />
  );
}

export default App;