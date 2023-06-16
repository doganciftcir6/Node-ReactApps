import './App.css';
import Saat from './components/Saat';
import Sehiler from './components/Sehiler';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' Component={Sehiler}/>
        <Route path='/:kita/:yer' Component={Saat}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
