import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes >
      <Route path="/" element={<Root />} >
      <Route path="/" element={<Home/>}/>  
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
