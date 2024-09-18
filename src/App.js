import './App.css';
import { Canvas } from './Canvas/Canvas';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function App() {
  const [dados, setDados] = useState([])

  // Hook para fazer a requisição para a API
  useEffect(() => {
    // Faz a requisição para a API e obtém PosX e PosY
    fetch('https://deerego-back.onrender.com/user?Role=rebocador')
      .then(response => response.json())
      .then(data => {
        if (data){
          setDados(data)
        }
      })
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  // Função para retornar a imagem de acordo com o local
  function getImage(local){
    console.log(local)
    if (local === 'setor a'){
      return 'https://cdn.pixabay.com/photo/2020/05/04/10/21/background-5128585_1280.jpg'
    }
    if (local === 'setor B - quadrante 3'){
      return 'https://bovmeat.com.br/painel/assets/app/media/img/bg/bg-1.jpg'
    }
    if (local === 'setor A - quadrante 4'){
      return 'https://gastros.com.br/wp-content/uploads/2015/07/grd-bg.jpg'
    }
  }
  return (
    <>
      <Swiper
        key={'bleurs'}
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {dados.map (dado => (
          dado.rebocadores[0].carrinhos[0]?
          <SwiperSlide key={dado.rebocadores[0].carrinhos[0]._id}>
            <Canvas
              posX={dado.rebocadores[0].carrinhos[0].PosX}
              posY={dado.rebocadores[0].carrinhos[0].PosY}
              width="600"
              height="600"
              img={getImage(dado.rebocadores[0].carrinhos[0].Local)}
              id={dado.rebocadores[0].carrinhos[0]._id}
              className={'class-'+ dado.rebocadores[0].carrinhos[0]._id}/>
              {console.log(dado.rebocadores[0].carrinhos[0]._id)}
          </SwiperSlide>
          : <></>
          
        ))}
        
      </Swiper>
    </>
    );

    
}

export default App;
