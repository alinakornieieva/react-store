import './App.scss';
import Basket from './components/basket/Basket';
import Filter from './components/filter/Filter';
import Header from './components/header/Header';
import ProductRange from './components/productRange/ProductRange';

function App() {
  return (
    <div className="App">
      <div className='Header-div'>
        <Header/>
        <Basket/>
      </div>
      <Filter/>
      <ProductRange/>
    </div>
  );
}

export default App;
