import React, { useRef, useEffect } from 'react'


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

const Canvas = props => {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        canvas.width = 1000;
        canvas.height = 1000;
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = draw;
        img.src = "/img/ref-small.jpg";

        var colorToReplace = convertFromHexToRGB("#01dbff")

        function draw() {
            ctx.drawImage(img, 0, 0);
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imgData.data;

            var tolerance = 150;
            for (let i = 0; i < pixels.length; i += 4) {
                // Turn into grayscale
                /* const total = pixels[i] + pixels[i + 1] + pixels[i + 2];
                const avg = total / 3;
                pixels[i] = avg;
                pixels[i + 1] = avg;
                pixels[i + 2] = avg; */
                var diff = Math.abs(pixels[i] - colorToReplace[0]) + Math.abs(pixels[i + 1] - colorToReplace[1]) + Math.abs(pixels[i + 2] - colorToReplace[2]);
                var hex = convertFromRGBToHex(pixels[i], pixels[i + 1], pixels[i + 2]);

                if (diff < tolerance) {
                    pixels[i] = 108;
                    pixels[i + 1] = 122;
                    pixels[i + 2] = 137;
                }

                // Replace color
                /* if (hex == testHex) {
                    pixels[i] = 108;
                    pixels[i + 1] = 122;
                    pixels[i + 2] = 137;
                } */

            }
            ctx.putImageData(imgData, 0, 0);
        }

    }, [])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas