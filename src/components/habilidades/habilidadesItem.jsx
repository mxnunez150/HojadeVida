import ProgressBar from 'react-bootstrap/ProgressBar';

const HabilidadesItem = ({ habilidades: { valor, porcentaje } }) => (
  <div className='flex items-center justify-between w-100 tablet:w-50'>
    <ProgressBar variant='info' animated now={porcentaje} className='w-50' />
    <h2>{valor}</h2>
  </div>
);

export default HabilidadesItem;
