import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './components/pages/home/Home';
import { Contact } from './components/pages/formularios/Contact';
import { Nosotros } from './components/pages/paginasSecu/Nosotros';
import { Login } from './components/pages/paginasSecu/Login';
import { RegistroPersona } from './components/pages/paginasSecu/RegistroPersona';
import { RegistroEstablecimiento } from './components/pages/paginasSecu/RegistroEstablecimiento';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Nosotros' element={<Nosotros/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/RegistroPersona' element={<RegistroPersona/>}/>
        <Route path='/RegistroEstablecimiento' element={<RegistroEstablecimiento/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
