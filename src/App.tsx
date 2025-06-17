import './App.css';
import { MOCK_PROPS } from './components/model/constants';
import { ProductCard } from './components/ui/ productCard';

function App() {
     return (
          <>
               <ProductCard {...MOCK_PROPS} />
          </>
     );
}

export default App;
