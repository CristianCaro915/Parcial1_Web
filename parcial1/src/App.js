import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/home/home'
import Profile from './components/profile/profile';
import HomeDetail from './components/home/homedetail';
import Imagen from './components/home/imagen'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
        <Route path='/' element={<Home/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/imagen' element={<Imagen/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
