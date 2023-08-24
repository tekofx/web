import { useRef, useEffect } from "react";

interface Color {
  name: string;
  hex: string;
}
interface CanvasProps {
  src: string;
  selectedColor: Color;
  onClick: any;
}
function convertFromHexToRGB(color: Color) {
  var red = parseInt(color.hex.substring(1, 3), 16);
  var green = parseInt(color.hex.substring(3, 5), 16);
  var blue = parseInt(color.hex.substring(5, 7), 16);

  return [red, green, blue];
}
// Function that turns a color a little into gray and dims it and returns it as rgb. It takes rgb as input.
function convertToGray(r: number, g: number, b: number) {
  var gray = (r + g + b) / 5;
  var red = Math.round(gray * 0.4);
  var green = Math.round(gray * 0.4);
  var blue = Math.round(gray * 0.4);

  return [red, green, blue];
}

// Function that turns a color a little into red and dims it and returns it as rgb. It takes rgb as input.

export default function Canvas({ src, selectedColor, onClick }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    var ctx = canvas.getContext("2d", { willReadFrequently: true });
    var img = new Image();
    img.src = src;
    img.onload = draw;

    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = img.width;
    canvas.height = img.height;

    function draw() {
      if (ctx == null) {
        return;
      }
      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, img.width, img.height);
      if (selectedColor.hex !== "") {
        // This color whill be shown in the image and the rest will be grayed out.
        const colorToMaintain = convertFromHexToRGB(selectedColor);

        const pixels = imgData.data;

        // Tolerance to get the color. The lower the more precise.
        var tolerance = 50;
        for (let i = 0; i < pixels.length; i += 4) {
          // If pixel is transparent, skip.
          if (pixels[i + 3] == 0) {
            continue;
          }

          // Get the difference between the color to maintain and the current color of the pixel.
          var diff =
            Math.abs(pixels[i] - colorToMaintain[0]) +
            Math.abs(pixels[i + 1] - colorToMaintain[1]) +
            Math.abs(pixels[i + 2] - colorToMaintain[2]);

          if (diff > tolerance) {
            var gray = convertToGray(pixels[i], pixels[i + 1], pixels[i + 2]);
            if (selectedColor.hex == "#2D2D2D") {
              pixels[i] = gray[0] + 210;
              pixels[i + 1] = gray[1] + 210;
              pixels[i + 2] = gray[2] + 210;
            } else {
              pixels[i] = gray[0];
              pixels[i + 1] = gray[1];
              pixels[i + 2] = gray[2];
            }
          }
        }
        ctx.putImageData(imgData, 0, 0);
      }
    }
  }, [selectedColor]);

  return (
    <div
      style={{
        display: "inline-block",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Bubbles */}
      <img
        src={process.env.PUBLIC_URL + "img/ref/ref-bubbles.png"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 25,
        }}
      />

      {/* Views */}
      <canvas
        ref={canvasRef}
        onClick={onClick}
        style={{ zIndex: 20, position: "relative" }}
      />

      {/* Background */}
      <img
        src={process.env.PUBLIC_URL + "img/ref/ref-background.png"}
        style={{
          position: "absolute",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
    </div>
  );
}
