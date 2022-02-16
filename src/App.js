
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
  function App() {
    return (
      <div className="App">
        <Header />
        <Routes>
           <Route path='/' element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    );
  }

export default App;
