import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './App.css'
import App from './components/app.jsx'
import Contact  from './components/contact.jsx'
import Users from './components/users.jsx'
import NotFound from './components/notfound.jsx'
import Products from './components/product.jsx'
import ProductDetail from './components/productDetail.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <div>

      <ul className='d-flex justify-content-center'>
        <li className='m-2'>
          <Link to="/">Home</Link>
        </li>
        <li className='m-2'>
          <Link to="/usuarios">Users</Link>
        </li>
        <li className='m-2'>
          <Link to="/contacto">Contact</Link>
        </li>
        <li className='m-2'>
          <Link to="/productos">Productos</Link>
        </li>
      </ul>

      <Routes>
        <Route exact path="/" Component={App}/>
        <Route exact path="/usuarios/:id" Component={Users} />
        <Route exact path="/contacto" Component={Contact} />
        <Route exact path="/productos" Component={Products} />
        <Route exact path="/productos/:id" Component={ProductDetail} />
        <Route path="*" Component={NotFound} />
      </Routes>

    </div>
  </Router>
)
