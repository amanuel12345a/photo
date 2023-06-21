import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Testmonials from './pages/Testmonials';
import Packages from './pages/Packages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes >
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/testmonial" element={<Testmonials />}></Route>
      <Route path="/package" element={<Packages />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
