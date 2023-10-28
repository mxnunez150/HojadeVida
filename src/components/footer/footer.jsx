import { BsFacebook, BsGithub, BsGoogle, BsLinkedin } from 'react-icons/bs';
import 'components/footer/footer.css';

const Footer = ({ redesSociales }) => (
  <div className='flex flex-col p-3 tablet:flex-row desktop:bg-black w-full justify-around'>
    <a
      href='https://www.facebook.com/mar.nunez.56/'
      className='flex justify-center items-center mb-2 desktop:text-white text-center'
    >
      <BsFacebook size={28} classname='footer-icon' />
      <h2 className='mx-4 footer-link'>{redesSociales[0]}</h2>
    </a>

    <a
      href='https://github.com/mxnunez150'
      className='flex justify-center items-center mb-2 desktop:text-white text-center'
    >
      <BsGithub size={28} classname='footer-icon' />
      <h2 className='mx-4 footer-link'>{redesSociales[1]}</h2>
    </a>

    <a
      href='https://drive.google.com/file/d/0B4QFakluw3H0OGR3bDNwV1EwZGc/view?usp=drive_link&resourcekey=0-m9pQdadiioaZ7r3i4QitZA'
      className='flex justify-center items-center mb-2 desktop:text-white text-center'
    >
      <BsGoogle size={28} classname='footer-icon' />
      <h2 className='mx-4 footer-link'>{redesSociales[2]}</h2>
    </a>

    <a
      href='https://www.linkedin.com/in/marbelis-xiomara-nunez-leon/'
      className='flex justify-center items-center mb-2 desktop:text-white text-center'
    >
      <BsLinkedin size={28} classname='footer-icon' />
      <h2 className='mx-4 footer-link'>{redesSociales[3]}</h2>
    </a>
  </div>
);

export default Footer;
