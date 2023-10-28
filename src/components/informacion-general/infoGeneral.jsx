import Contacto from 'components/informacion-general/contacto/contacto';
import Estudios from 'components/informacion-general/estudios/estudios';
import Foto from 'components/informacion-general/foto/foto';

const InformacionGeneral = ({ datosContacto, estudios }) => (
  <div className='px-8 pt-4 flex tablet:items-start flex-col tablet:flex-row  tablet: justify-evenly desktop:flex-col desktop:items-center desktop:bg-white'>
    <Foto />
    <Contacto datosContacto={datosContacto} />
    <Estudios estudios={estudios} />
  </div>
);

export default InformacionGeneral;
