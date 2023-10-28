import { TbLanguageHiragana } from 'react-icons/tb';
import IdiomasItem from 'components/idiomas/idiomasItem';
import english from 'images/english.png';
import 'components/idiomas/idiomas.css';

const Idiomas = ({ idiomas }) => (
  <div className='tablet:p-0 p-8'>
    <div className='flex justify-center items-center mb-4'>
      <TbLanguageHiragana size={36} color='white' />
      <h1 className='ml-3'>Idiomas</h1>
    </div>
    <hr />
    <div className='flex overflow-x-scroll tablet:justify-evenly'>
      <img
        className='rounded-full image-flag mx-4 mb-5'
        src={english}
        alt='english'
      />
      <IdiomasItem idioma={idiomas[0]} />
    </div>
  </div>
);

export default Idiomas;
