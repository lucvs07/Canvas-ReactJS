
import React from "react";
import './styles.css';
import { useCanvas } from "./CanvasHooks";

export function Canvas({posX, posY, img, id,...rest}){

    const draw = (ctx, frameCount) => {
        // ctx -> contexto 2D do canvas
        // frameCount -> contador de frames - para animações
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(posX, posY, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        ctx.fill();
      }

    const canvasRef = useCanvas(draw);
    console.log('img:', img);
    return (
        <>
            <style>
                {`
                    .${id}{
                        background-image: url(${img});
                    }
                `}
            </style>
            <canvas ref={canvasRef} {...rest}></canvas>
        </>
    );
}