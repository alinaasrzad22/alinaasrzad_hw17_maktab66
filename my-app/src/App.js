import './App.css';

import Allitem from './components/Allitem';
import Contexts from './components/Contexts';
import Selecteditem from './components/Selecteditem';

function App() {
  return (
    <div className="app">
      <Contexts> 
      <Allitem/>
      <Selecteditem/>
      </Contexts>
     
      
    </div>
  );
}

export default App;
