import { FaPhoneSquareAlt } from 'react-icons/fa';
import { MdMail, MdLocationPin } from 'react-icons/md';

const Contacto = ({ datosContacto: { celular, correo, ubicacion } }) => (
  <div className='flex flex-col  overflow-x-scroll mb-3'>
    <h1 className='text-center desktop:text-black'>Contacto</h1>
    <hr />
    <div className='flex items-center justify-center mb-3 tablet:justify-center'>
      <FaPhoneSquareAlt
        size={28}
        color='white'
        className='mr-3 desktop:fill-black'
      />
      <h2 className='desktop:text-black'>{celular}</h2>
    </div>
    <div className='flex items-center justify-center mb-3 tablet:justify-center'>
      <MdMail className='mr-3 desktop:fill-black' color='white' size={28} />
      <h5 className='desktop:text-black'>{correo}</h5>
    </div>
    <div className='flex items-center justify-center mb-3 tablet:justify-center'>
      <MdLocationPin
        className='mr-3 desktop:fill-black'
        color='white'
        size={28}
      />
      <h2 className='desktop:text-black'>{ubicacion}</h2>
    </div>
  </div>
);

export default Contacto;
