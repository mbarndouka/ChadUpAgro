
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Notfind from './pages/Notfind/Notfind'
// import Loading from './pages/Loading/Loading'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={< Home />}/>
        <Route path='*' element = {<Notfind/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
