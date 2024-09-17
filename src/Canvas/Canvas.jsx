
import React from "react";
import './styles.css';
import { useCanvas } from "./CanvasHooks";

export function Canvas({draw, img, id,...rest}){
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