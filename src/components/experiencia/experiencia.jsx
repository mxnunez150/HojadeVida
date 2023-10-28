import { MdWork } from 'react-icons/md';
import ExperienciaItem from 'components/experiencia/experienciaItem';

const Experiencia = ({ experiencia }) => (
  <div className=' p-8'>
    <div className='flex justify-center items-center'>
      <MdWork size={28} color='white' />
      <h1 className='text-center ml-4'>Experiencia Laboral</h1>
    </div>
    <hr />

    <div className='flex overflow-x-scroll'>
      {experiencia.map((element) => (
        <ExperienciaItem experiencia={element} key={element.cargo} />
      ))}
    </div>
  </div>
);

export default Experiencia;
