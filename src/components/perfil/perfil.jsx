import { BsFileEarmarkPersonFill } from 'react-icons/bs';

const Perfil = ({ perfil }) => (
  <div className='flex flex-col p-8 tablet:w-2/4'>
    <div className='flex justify-center items-center'>
      <BsFileEarmarkPersonFill size={28} color='white' />
      <h1 className='ml-2'>Perfil</h1>
    </div>
    <hr />
    <h2 className='text-justify'>{perfil}</h2>
  </div>
);

export default Perfil;
