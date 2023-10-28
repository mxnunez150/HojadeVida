import { FaBookOpen } from 'react-icons/fa';
import CursosItem from 'components/cursos/cursosItem';

const Cursos = ({ cursos }) => (
  <div className='p-8'>
    <div className='flex justify-center items-center mb-3'>
      <FaBookOpen size={28} className='mr-4' color='white' />
      <h1>Cursos</h1>
    </div>
    <hr />
    <div className='flex overflow-x-scroll'>
      {cursos.map((element) => (
        <CursosItem curso={element} key={element} />
      ))}
    </div>
  </div>
);

export default Cursos;
