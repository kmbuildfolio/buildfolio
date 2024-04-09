import { Route } from 'react-router-dom';
import Portfolio from './portfolio/Portfolio';
import PortfolioForm from './portfolioForm/PortfolioForm'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Authentication from './authUI/Authentication';
import Home from './components/Home';
import './App.css'
import NotFound from './components/NotFound';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

const App = () =>{
  return (
    <BrowserRouter>
    <ToastContainer position='top-center'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="form" element={<PortfolioForm />}/>
        <Route path='/:name' element={<Portfolio/>}/>
        <Route path='login' element={<Authentication/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;