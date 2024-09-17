import './App.css';
import { Canvas } from './Canvas/Canvas';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function App() {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [posLocal, setPosLocal] = useState(0);

  useEffect(() => {
    // Faz a requisição para a API e obtém PosX e PosY
    fetch('https://deerego-back.onrender.com/user?Role=rebocador')
      .then(response => response.json())
      .then(data => {
        console.log('Data:', data);
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
    if(posLocal === 'Bumbum'){
      return <Canvas draw={draw} width="600" height="600" img='https://cdn.pixabay.com/photo/2020/05/04/10/21/background-5128585_1280.jpg'/>
    }else{
      return (
      <>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Canvas draw={draw} width="600" height="600" img='https://cdn.pixabay.com/photo/2020/05/04/10/21/background-5128585_1280.jpg' id={'canvas1'} className='canvas1'/>
          </SwiperSlide>
          <SwiperSlide>
            <Canvas draw={draw} width="600" height="600" img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsilKSi86Q6pJIrgN29TCcC-ZiRG-_c6_B3Q&s' id={'canvas2'} className='canvas2'/>
          </SwiperSlide>
          <SwiperSlide>
            <Canvas draw={draw} width="600" height="600" img='https://img.freepik.com/vetores-gratis/fundo-digital-do-espaco-azul-da-copia_23-2148821698.jpg' id={'canvas3'} className='canvas3'/>
          </SwiperSlide>
        </Swiper>
      </>
      );
    };

    
}

export default App;
