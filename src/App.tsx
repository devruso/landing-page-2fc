import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes >
      <Route path="/" element={<Root />} >
      <Route index element={<Home/>}/> 
      <Route path="/sobre" element={<About/>}/> 
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
