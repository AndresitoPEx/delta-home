import './productos.css'

import { buscar } from "../../api/api";
import { useState, useEffect } from "react";

const ListarProductos = ({ url }) => {
  const [productos, setProductos] = useState([]);
  const [imagenes, setImagenes] = useState([]);
//mejorar esto para que no se haga la peticion cada vez que se renderiza
  useEffect(() => {
    buscar(url, setProductos);
    //crear un nuevo componente para las imagenes. luegoooo!
    buscar('https://apisdelta.azurewebsites.net/api/imagenes/', setImagenes);
  }, [url]);

  return (
    <div>
      <div className="container">
        {productos.map((producto) => {
          const imagen = imagenes.find((img) => img.id === producto.imagen);
          const imagenURL = imagen ? imagen.nombre : '';

          return (
            <div className="card" key={producto.id}>
              <img src={imagenURL} alt={producto.nombre} />
              <h4>{producto.nombre}</h4>
              <p>{producto.descripcion}</p>
              <p>S/.{producto.precio}</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListarProductos;
