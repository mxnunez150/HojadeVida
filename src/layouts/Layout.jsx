import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/footer/footer';
import { useDatos } from 'hooks/datos/useDatos';

const { redesSociales } = useDatos();

const Layout = () => (
  <main className='flex flex-col'>
    <Outlet />
    <Footer redesSociales={redesSociales} />
  </main>
);

export { Layout };
