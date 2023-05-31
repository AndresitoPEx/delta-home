import { buscar } from "../../api/api";
import { useState, useEffect } from "react";

const ImagenesApi = ({ url, children }) => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    buscar(url, setImagenes);
  }, [url]);

  return children(imagenes);
};

export default ImagenesApi;
