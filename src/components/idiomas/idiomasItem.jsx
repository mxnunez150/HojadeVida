const IdiomasItem = ({ idioma: { nombreIdioma, nivel } }) => (
  <div>
    <h2>{nombreIdioma}</h2>
    <h2>{nivel}</h2>
  </div>
);

export default IdiomasItem;
