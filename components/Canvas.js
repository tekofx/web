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

const Canvas = props => {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = draw;
        img.src = "/img/ref-small.jpg";

        var testHex = "#487bd6"


        function draw() {
            ctx.drawImage(img, 0, 0);
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imgData.data;

            for (let i = 0; i < pixels.length; i += 4) {
                // Turn into grayscale
                /* const total = pixels[i] + pixels[i + 1] + pixels[i + 2];
                const avg = total / 3;
                pixels[i] = avg;
                pixels[i + 1] = avg;
                pixels[i + 2] = avg; */
                var hex = convertFromRGBToHex(pixels[i], pixels[i + 1], pixels[i + 2]);

                // Replace color
                if (hex == testHex) {
                    pixels[i] = 108;
                    pixels[i + 1] = 122;
                    pixels[i + 2] = 137;
                }

            }
            ctx.putImageData(imgData, 0, 0);
        }

    }, [])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas