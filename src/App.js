import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Home from "./pages/HomePage/Home";
import Services from './pages/Services/Services'
import Product from './pages/Product/Product'
import SignUp from './pages/SignUp/SignUp'
import { Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>

      <GlobalStyle /> 
      <ScrollToTop /> 
      <Navbar /> 
      
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/services' exact Component={Services} />
        <Route path='/product' exact Component={Product} />
        <Route path='/sign-up' exact Component={SignUp} />
      </Routes>
      <Footer />
         
    </Router>
  );
}

export default App;
