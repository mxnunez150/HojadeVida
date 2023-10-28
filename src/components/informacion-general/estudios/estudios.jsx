import { FaUserGraduate } from 'react-icons/fa';

const Estudios = ({ estudios: { carrera, universidad, fecha } }) => (
  <div className='flex flex-col justify-center text-center'>
    <div className='flex justify-center items-center'>
      <FaUserGraduate size={28} color='white' />
      <h1 className='text-center ml-2 desktop:text-black'>Estudios</h1>
    </div>
    <hr />

    <h2 className='desktop:text-black'>{carrera}</h2>

    <h2 className='desktop:text-black'>{universidad}</h2>

    <h2 className='desktop:text-black'>{fecha}</h2>
  </div>
);

export default Estudios;
