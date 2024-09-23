
import React, { useEffect, useRef } from "react";
import './styles.css';
import { useCanvas } from "./CanvasHooks";
import logo from "../Assets/img/shopping-cart-fill.svg"

// Componente Canvas
// Parâmetros:
// posX -> posição X do objeto no canvas
// posY -> posição Y do objeto no canvas
// img -> imagem de fundo do canvas
// id -> id do objeto
// ...rest -> outros parâmetros
export function Canvas({posX, posY, img, id,...rest}){    
    const logoImg = useRef(new Image());

    useEffect(() => {
        logoImg.current.src = logo;
    }, []);
    // Função para desenhar no canvas
    const draw = (ctx, frameCount) => {
        // ctx -> contexto 2D do canvas
        // frameCount -> contador de frames - para animações

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.beginPath();
        ctx.drawImage(logoImg.current, posX, posY, 50, 50);
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(posX, posY, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        ctx.fill();
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(100, 500, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        ctx.fill();
      }

    const canvasRef = useCanvas(draw);
    console.log('img:', img);
    return (
        <>
            <style>
                {`
                    .class-${id}{
                        background-image: url(${img});
                    }
                `}
            </style>
            <div className="logotipo" id="logotipo">
                <img src={logo} alt="" />
            </div>
            <canvas ref={canvasRef} {...rest}></canvas>
        </>
    );
}