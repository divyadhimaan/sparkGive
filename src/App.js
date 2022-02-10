import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard/index.js';
import './App.css';

function App() {
 return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' exact element={<Dashboard />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
