
import './App.css';
import Header from './components/Header';
import { SimpleSlider } from './components/Slider';
import Main from './components/Main';
import Footer from './components/Footer';
import FormUsuario from './components/FormUsuario';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Header />
      
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <SimpleSlider />
              <Main />
            </>
          }  />
          
          <Route path="/registrar-usuario" element={<FormUsuario />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
