
import './App.css';
import Header from './components/Header';
import { SimpleSlider } from './components/Slider';
import Main from './components/Main';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <SimpleSlider />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
