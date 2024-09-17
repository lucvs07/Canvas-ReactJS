import './App.css';
import { Canvas } from './Canvas/Canvas';
import { useEffect, useState } from 'react';
function App() {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [posLocal, setPosLocal] = useState(0);


  useEffect(() => {
    // Faz a requisição para a API e obtém PosX e PosY
    fetch('https://deerego-back.onrender.com/user?Role=rebocador')
      .then(response => response.json())
      .then(data => {
        const carrinho = data[4].rebocadores[0].carrinhos[0];
        console.log('Carrinho:', carrinho);
        setPosX(carrinho.PosX);
        setPosY(carrinho.PosY);
        setPosLocal(carrinho.Local);
      })
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);
  console.log('PosX:', posX);
  console.log('PosY:', posY);
  console.log('Local:', posLocal);
  const draw = (ctx, frameCount) => {
    // ctx -> contexto 2D do canvas
    // frameCount -> contador de frames - para animações
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(posX, posY, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill();
  }
  return (
    <Canvas draw={draw} width="600" height="600"/>
  );
}

export default App;
