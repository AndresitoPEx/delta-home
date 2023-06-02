
import './App.css';
import Header from './components/Header';
import { SimpleSlider } from './components/Slider';
import Main from './components/Main';
import Footer from './components/Footer';
import FormUsuario from './components/FormUsuario';
import ListarUsuarios from './components/ListaUsuarios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">


      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <SimpleSlider />
              <Main />
            </>
          }/>
          <Route path="/registrar-usuario" element={<FormUsuario />} />
          <Route path="/listar-usuarios" element={<ListarUsuarios />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
