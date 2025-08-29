import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

function App() {
  return (
   
   <Router>
  <Header/><Home/> <Footer/></Router>
  );
}

export default App;
