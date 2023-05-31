import './productos.css';
import { useState, useEffect } from "react";
import ImagenesApi from "./../ImagenesApi";
import { buscar } from "../../api/api";

const ListarProductos = ({ url }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    buscar(url, setProductos);
  }, [url]);

  return (
    <ImagenesApi url="/api/imagenes">
      {(imagenes) => (
        <div>
          <div className="container">
            {productos.map((producto) => (
              <div className="card" key={producto.id}>
                <img src={obtenerImagen(imagenes, producto.idImagen)} alt={producto.nombre} />
                <h4>{producto.nombre}</h4>
                <p>{producto.descripcion}</p>
                <p>S/.{producto.precio}</p>
                <button>Comprar</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </ImagenesApi>
  );
};

const obtenerImagen = (imagenes, idImagen) => {
  const imagen = imagenes.find((imagen) => imagen.id === idImagen);
  return imagen ? imagen.nombre : '';
};

export default ListarProductos;
