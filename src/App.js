import './App.css';
import { Canvas } from './Canvas/Canvas';
function App() {
    const draw = (ctx, frameCount) => {
      // ctx -> contexto 2D do canvas
      // frameCount -> contador de frames - para animações
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
      ctx.fill();
  }
  return (
    <Canvas draw={draw} width="600" height="600"/>
  );
}

export default App;
