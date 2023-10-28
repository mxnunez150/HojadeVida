const ExperienciaItem = ({
  experiencia: { cargo, fecha, empresa, descripcion },
}) => (
  <div className='flex flex-col mr-10'>
    <h1 className='mb-4'>{cargo}</h1>

    <h2 className='mb-4'>{fecha}</h2>

    <h2 className='mb-4'>{empresa}</h2>
    <h2 className='mb-4'>{descripcion}</h2>
  </div>
);

export default ExperienciaItem;
