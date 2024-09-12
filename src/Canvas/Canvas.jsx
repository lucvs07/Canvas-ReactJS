
import React from "react";
import './styles.css';
import { useCanvas } from "./CanvasHooks";

export function Canvas({draw, ...rest}){
    const canvasRef = useCanvas(draw);
    return (
        <canvas ref={canvasRef} {...rest}></canvas>
    );
}