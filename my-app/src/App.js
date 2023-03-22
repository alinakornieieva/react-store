import './App.scss';
import Filter from './components/filter/Filter';
import Header from './components/header/Header';
import ProductRange from './components/productRange/ProductRange';

function App() {
  return (
    <div className="App">
      <Header/>
      <Filter/>
      <ProductRange/>
    </div>
  );
}

export default App;
