import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './components/pages/home/Home';
import { Contact } from './components/pages/formularios/Contact';
import { Nosotros } from './components/pages/paginasSecu/Nosotros';
import { Login } from './components/pages/formularios/Login';
import { RegistroPersona } from './components/pages/formularios/RegistroPersona';
import { RegistroEstablecimiento } from './components/pages/formularios/RegistroEstablecimiento';
import { PerfilEstablecimientos } from './components/pages/paginasSecu/PerfilEstablecimientos';



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
        <Route path='/PerfilEstablecimiento' element={<PerfilEstablecimientos/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
