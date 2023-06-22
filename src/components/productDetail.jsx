import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const  ProductDetail = () => {
  
  let params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/productos/${params.id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [params.id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
        <h1>Detalles del producto</h1>
        <div className="mt-4">
            <div className="d-flex">
                <div className='img-detail'>
                    <img src={product.imagen} alt={product.nombre} className="product-image" />
                </div>
                <div className="d-flex flex-column text-start pl-4">
                    <h2>{product.nombre}</h2>
                    <p>Descripción: {product.descripcion}</p>
                    <p>Precio: {product.precio}</p>
                </div>
            </div>
        </div>
      </div>
  );
}

export default ProductDetail;
