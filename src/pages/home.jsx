import React from 'react';
import { useDatos } from 'hooks/datos/useDatos';
import InformacionGeneral from 'components/informacion-general/infoGeneral';
import Experiencia from 'components/experiencia/experiencia';
import Cursos from 'components/cursos/cursos';
import Idiomas from 'components/idiomas/idiomas';
import Perfil from 'components/perfil/perfil';
import Habilidades from 'components/habilidades/habilidades';
import { Header } from 'components/header/header';
import 'pages/home.css';

const Home = () => {
  const {
    datosContacto,
    perfil,
    estudios,
    experiencia,
    cursos,
    idiomas,
    habilidades,
  } = useDatos();
  return (
    <main className='max-w-full content flex flex-col desktop:flex-row desktop:justify-between'>
      <div className='left-container desktop:bg-white'>
        <Header />
        <InformacionGeneral datosContacto={datosContacto} estudios={estudios} />
      </div>
      <div className='right-container flex flex-col'>
        <Experiencia experiencia={experiencia} />
        <div className='flex flex-col tablet:flex-row tablet: justify-center'>
          <Perfil perfil={perfil} />
          <Habilidades habilidades={habilidades} />
        </div>
        <Idiomas idiomas={idiomas} />
        <Cursos cursos={cursos} />
      </div>
    </main>
  );
};

export default Home;
