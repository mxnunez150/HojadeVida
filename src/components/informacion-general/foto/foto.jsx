import foto from 'images/perfil.jpg';
import 'components/informacion-general/foto/foto.css';

const Foto = () => (
  <div className='flex flex-col justify-center items-center text-center mr-4'>
    <img
      className='rounded-full my-4 foto-perfil'
      src={foto}
      alt='foto perfil'
    />
  </div>
);

export default Foto;
