import { FaReact } from 'react-icons/fa';
import HabilidadesItem from 'components/habilidades/habilidadesItem';

const Habilidades = ({ habilidades }) => (
  <div className='flex flex-col items-center p-8 tablet:w-2/4'>
    <div className='flex justify-center items-center flex-nowrap'>
      <FaReact size={28} color='white' />
      <h1 className='ml-4'>Habilidades</h1>
    </div>
    <hr />
    <div className='w-100'>
      {habilidades.map((element) => (
        <HabilidadesItem habilidades={element} />
      ))}
    </div>
  </div>
);

export default Habilidades;
