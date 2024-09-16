import {useRef, useEffect} from "react";

export function useCanvas(draw){
    // context e ref para o canvas -> para acessar o canvas e desenhar nele
    const canvasRef = useRef(null);


    useEffect(() => {
        // Acessa o canvas 
        const canvas = canvasRef.current;
        // Acessa o contexto 2D do canvas
        const context = canvas.getContext('2d');

        let frameCount = 0;
        let animationFrameId;

        // desenhar no canvas
        const render = () => {
            frameCount = 20;
            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        }
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    },[draw]);
    return canvasRef;
}
    
