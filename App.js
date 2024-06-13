
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Bootstrap files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
// components
import HeaderComponent from './components/Header';
import CarouselComponent from './components/Carousel';
import ProductComponent from './components/Product';
import FooterComponent from './components/Footer';
// pages
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import { useEffect, useState, createContext} from 'react';
// theme css files
import applyLightTheme from '../src/Theme/lightTheme.module.css';
import applyDarkTheme from '../src/Theme/darkTheme.module.css';

//export const themeContextVariable = createContext();
function App() {
  //const [defaultTheme, setDarkTheme] = useState(applyLightTheme.lightTheme);
  const [apiData, setApiData] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(resp => resp.json())
      .then(data => setApiData(data));
  }, []);
  const handleTheme = () => {
    //setDarkTheme(applyDarkTheme.darkTheme);
}
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeaderComponent />}>
            <Route index element={<Home products={apiData} />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
