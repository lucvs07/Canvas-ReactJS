
import React from "react";
import './styles.css';
import { useCanvas } from "./CanvasHooks";

export function Canvas({draw, img,...rest}){
    const canvasRef = useCanvas(draw);
    console.log('img:', img);
    return (
        <>
            <style>
                {`
                    canvas {
                        background-image: url(${img});
                    }
                `}
            </style>
            <canvas ref={canvasRef} {...rest}></canvas>
        </>
    );
}