import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import  ShopCategory  from './Pages/ShopCategory';
import  Product  from './Pages/Product';
import  LoginSignup  from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import OrderDetails from './Pages/OrderDetails';
import Footer from './Components/Footer/Footer';
import OrderPlaced from './Pages/OrderPlaced';
import banner_men  from './Components/Assets/banner_men.png'
import banner_women from  './Components/Assets/banner_women.png'
import banner_accessories from './Components/Assets/banner_accessories.png'

function App() {
  return (
    <div >
      <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory banner={banner_men} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={banner_women} category="women" />} />
        <Route path='/accessories' element={<ShopCategory banner={banner_accessories} category="accessories" />} />
        <Route path = '/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>

        <Route path='/cart' element= {<Cart/>}/>
        <Route path='/login' element= {<LoginSignup/>}/>
        <Route path='/orderdetails' element= {<OrderDetails/>}/>
        <Route path='/orderplaced' element= {<OrderPlaced/>}/>

      </Routes>
      <Footer />

      </BrowserRouter>
     
    </div>
  );
};

export default App;
