import React, { useRef, useEffect, useState } from 'react'


function convertFromRGBToHex(r, g, b) {
    var red = r.toString(16);
    var green = g.toString(16);
    var blue = b.toString(16);

    if (red.length == 1)
        red = "0" + red;
    if (green.length == 1)
        green = "0" + green;
    if (blue.length == 1)
        blue = "0" + blue;

    return "#" + red + green + blue;
}

function convertFromHexToRGB(hex) {

    var red = parseInt(hex.substring(1, 3), 16);
    var green = parseInt(hex.substring(3, 5), 16);
    var blue = parseInt(hex.substring(5, 7), 16);

    return [red, green, blue];
}
// Function that turns a color a little into gray and dims it and returns it as rgb. It takes rgb as input.
function convertToGray(r, g, b) {
    var gray = (r + g + b) / 3;
    var red = Math.round(gray * 0.4);
    var green = Math.round(gray * 0.4);
    var blue = Math.round(gray * 0.4);

    return [red, green, blue];
}
const Canvas = props => {

    const canvasRef = useRef(null)
    console.log(props.selectedColor)

    useEffect(() => {
        const canvas = canvasRef.current

        var ctx = canvas.getContext("2d", { willReadFrequently: true });
        var img = new Image();
        img.onload = draw;
        img.src = props.src;

        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.width = img.width;
        canvas.height = img.height
        // This color whill be shown in the image and the rest will be grayed out.
        var colorToMaintain = convertFromHexToRGB(props.selectedColor)

        function draw() {
            ctx.drawImage(img, 0, 0);
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            if (props.selectedColor === "") {
                ctx.putImageData(imgData, 0, 0);
                return;
            }

            const pixels = imgData.data;

            // Tolerance to get the color. The lower the more precise.
            var tolerance = 80;
            for (let i = 0; i < pixels.length; i += 4) {
                // Get the difference between the color to maintain and the current color of the pixel.
                var diff = Math.abs(pixels[i] - colorToMaintain[0]) + Math.abs(pixels[i + 1] - colorToMaintain[1]) + Math.abs(pixels[i + 2] - colorToMaintain[2]);
                if (diff > tolerance) {
                    var gray = convertToGray(pixels[i], pixels[i + 1], pixels[i + 2]);
                    pixels[i] = gray[0];
                    pixels[i + 1] = gray[1];
                    pixels[i + 2] = gray[2];
                }
            }
            ctx.putImageData(imgData, 0, 0);
        }
    }, [props.selectedColor])

    return <div><canvas ref={canvasRef} {...props} onClick={props.onClick} /></div>
}

export default Canvas