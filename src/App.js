import { Canvas } from './Canvas/Canvas';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Zoom} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css?v=1';


// import images mapa
// Setor A
import SAfull from './Assets/img/mapa/SETOR A.png'
import SetorAQ1 from './Assets/img/mapa/SAQ1.png'
import SetorAQ2 from './Assets/img/mapa/SAQ2.png'
import SetorAQ3 from './Assets/img/mapa/SAQ3.png'
import SetorAQ4 from './Assets/img/mapa/SAQ4.png'

// Setor B
import SetorBQ1 from './Assets/img/mapa/SBQ1.png'
import SetorBQ2 from './Assets/img/mapa/SBQ2.png'
import SetorBQ3 from './Assets/img/mapa/SBQ3.png'
import SetorBQ4 from './Assets/img/mapa/SBQ4.png'

// Setor C
import SetorCQ1 from './Assets/img/mapa/SCQ1.png'
import SetorCQ2 from './Assets/img/mapa/SCQ2.png'
import SetorCQ3 from './Assets/img/mapa/SCQ3.png'
import SetorCQ4 from './Assets/img/mapa/SCQ4.png'

// Setor D
import SetorDQ1 from './Assets/img/mapa/SDQ1.png'
import SetorDQ2 from './Assets/img/mapa/SDQ2.png'
import SetorDQ3 from './Assets/img/mapa/SDQ3.png'
import SetorDQ4 from './Assets/img/mapa/SDQ4.png'


function App() {
  const [dados, setDados] = useState([])

  // Hook para fazer a requisição para a API
  useEffect(() => {
    // Faz a requisição para a API e obtém PosX e PosY
    fetch('https://deerego-back.onrender.com/user?role=rebocador')
      .then(response => response.json())
      .then(data => {
        if (data){
          setDados(data)
          console.log(data)
        }
      })
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  // Função para retornar a imagem de acordo com o local
  function getImage(local){
    console.log(local)
    if (local === 'A'){
      return SAfull
    }
    if (local === 'A1'){
      return SetorAQ1
    }
    if (local === 'A2'){
      return SetorAQ2
    }
    if (local === 'A3'){
      return SetorAQ3
    }
    if (local === 'A4'){
      return SetorAQ4
    }
    if (local === 'B1'){
      return SetorBQ1
    }
    if (local === 'B2'){
      return SetorBQ2
    }
    if (local === 'B3'){
      return SetorBQ3
    }
    if (local === 'B4'){
      return SetorBQ4
    }
    if (local === 'C1'){
      return SetorCQ1
    }
    if (local === 'C2'){
      return SetorCQ2
    }
    if (local === 'C3'){
      return SetorCQ3
    }
    if (local === 'C4'){
      return SetorCQ4
    }
    if (local === 'D1'){
      return SetorDQ1
    }
    if (local === 'D2'){
      return SetorDQ2
    }
    if (local === 'D3'){
      return SetorDQ3
    }
    if (local === 'D4'){
      return SetorDQ4
    }
  }
  return (
    <>
      <Swiper
        key={'bleurs'}
        modules={[Navigation, Pagination, A11y, Zoom]}
        slidesPerView={1}
        centeredSlides={true}
        zoom={true}
        navigation={true}
        pagination={{ clickable: true }}
        className='mySwiper'
      >
        {dados.map (dado => {
          const rebocadores = dado.rebocadores;
          const carrinhos = rebocadores && rebocadores.length > 0 ? rebocadores[0].carrinhos : [];

          return carrinhos && carrinhos.length > 0 ? (
            <SwiperSlide key={carrinhos[0]._id}>
              <div className='swiper-zoom-container'>
                <h1>{carrinhos[0].Local}</h1>
                <Canvas
                  posX={carrinhos[0].PosX}
                  posY={carrinhos[0].PosY}
                  width="400"
                  height="400"
                  img={getImage(carrinhos[0].Local)}
                  id={carrinhos[0]._id}
                  className={`class-${carrinhos[0]._id}`}/>
              </div>
            </SwiperSlide>
          ): <></>
        }
          
        )}
        
      </Swiper>
    </>
    );

    
}

export default App;
