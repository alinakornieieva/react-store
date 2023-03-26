import './App.scss';
import Basket from './components/basket/Basket';
import Filter from './components/filter/Filter';
import Header from './components/header/Header';
import ProductRange from './components/productRange/ProductRange';
import SelectedItemsPage from './components/selectedItemsPage/SelectedItemsPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/homePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='Header-div'>
          <Header/>
          <Basket/>
        </div>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/my-basket' element={<SelectedItemsPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
