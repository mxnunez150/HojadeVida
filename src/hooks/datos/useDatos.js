const useDatos = () => {
  const datosContacto = {
    celular: '300 599 7322',
    correo: 'marbelis1501@hotmail.com',
    ubicacion: 'Medellín, Antioquia',
  };

  const estudios = {
    carrera: 'Tecnologa en Sistema ',
    universidad: 'Instituto de Tecnologia para la Informatica',
    fecha: '2015-2018',
  };

  const experiencia = [
    {
      cargo: 'Desarrollador de Software',
      fecha: 'Junio 2021 - Actualidad',
      empresa: 'Ordenamientos profesionales automatizados',
      descripcion:
        'C# · ASP.NET · Visual Studio · · Visual C# · Servicios web · Transact-SQL (T-SQL) · EntityFramework Transact-SQL (T-SQL) · Bases de datos · Modelo-Vista-Controlador (MVC)',
    },
    {
      cargo: 'Analista de Desarrollo',
      fecha: '2020-2- 2021-2',
      empresa: 'Empresa Microminerales SAS',
      descripcion:
        'C# · ASP.NET · Visual Studio · · Visual C# · Servicios web · Transact-SQL (T-SQL) · EntityFramework Transact-SQL (T-SQL) · Bases de datos · Modelo-Vista-Controlador (MVC)',
    },
    {
      cargo: 'Tecnico de Campo',
      fecha: '2014-1- 2017-1',
      empresa: 'Soporte S.P.I',
      descripcion:
        'Soporte de campo, Mantenimiento Correctivo ,Mantenimiento Preventivo',
    },
  ];

  const idiomas = [
    {
      idioma: 'Inglés',
      nivel: 'A2 proficient',
    },
  ];

  const perfil =
    'Desarrolladora de software con más de 3  años de trayectoria en la industria. Especializada en lacreación de soluciones tecnológicas robustas yeficientes, mi experiencia abarca varios lenguajesde programación, incluyendo Visual Basic, FoxPro,Lenguaje C y .NET. Siempre comprometida con laexcelencia técnica.';

  const cursos = [
    'Iniciacion en C#',

    'Bootcamp de .NET',

    'Desarrolladora de Software',
  ];

  const habilidades = [
    {
      valor: 'Responsable',
      porcentaje: 80,
    },
    {
      valor: 'Trabajo en equipo',
      porcentaje: 90,
    },
    {
      valor: 'Honesta',
      porcentaje: 100,
    },
  ];

  const redesSociales = [
    'Facebook',
    'GitHub',
    'Google Cloud Skill Boost',
    'LinkedIn',
  ];
  return {
    datosContacto,
    estudios,
    experiencia,
    idiomas,
    perfil,
    cursos,
    habilidades,
    redesSociales,
  };
};

export { useDatos };
