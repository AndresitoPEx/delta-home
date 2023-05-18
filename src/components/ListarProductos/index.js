import { useState, useEffect } from 'react';

import './listarProductos.css'
import { buscar } from '../../api/api';
import { Link } from 'react-router-dom';


const ListarProductos = ({url}) => {

    const [products, setPost] = useState([])

    useEffect(() => {
        buscar(url, setPost)
        console.log(products);
    } , [url])

    return(
        <section className="productos-container">
            {
                products.map((product) => {
                    return(
                        <Link to={`/products/${product.id}`} key={product.id} className="producto">
                            
                        </Link>
                    )
                })
            }
        </section>
    )
}

export default ListarProductos;


// products.map((product) => {
//     return(
//         <div className="producto" key={product.id}>
//             <img src={product.image} alt={product.title} className="producto-imagen"/>
//             <h3 className="producto-titulo">{product.title}</h3>
//             <p className="producto-precio">${product.price}</p>
//             <p className="producto-descripcion">{product.description}</p>
//         </div>
//     )
    
    
// })

// {
//     posts.map(post => {
//         const { id, title, metadescription, categoria } = post;
//         return <Link to={`/posts/${id}`} className={`post__card post-card--${categoria}`} key={id}>
//             <article >
//                 <h3 className="post-card__title">
//                     {title}
//                 </h3>
//                 <p className="post-card__meta">{metadescription}</p>
//             </article>
//         </Link>
//     })
// }