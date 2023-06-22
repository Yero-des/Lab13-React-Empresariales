import React from 'react'
import { Link} from 'react-router-dom';

class Products extends React.Component {
  state = {
    products: [],
    error: null
  };

  componentDidMount() {
    fetch('http://localhost:8000/api/productos/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data,
          error: null
        });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const { products, error } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h1>Products</h1>
        <div className="grid-container mt-4">
          {products.map(product => (
            <div key={product.id} className="grid-item">
              <img src={product.imagen} alt={product.name} className="product-image" />
              <div className="d-flex justify-content-between align-items-start">
                <h2>{product.nombre}</h2>
                <Link to={`/productos/${product.id}`}>Ver más</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
