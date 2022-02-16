
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Navbar2 from './component/navbar/Navbar2';
import Footer from './component/Footer/Footer';

  function App() {
    return (
      <div className="App">
         <Navbar2/>
        <Routes>
           <Route path='/' element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    );
  }

export default App;
