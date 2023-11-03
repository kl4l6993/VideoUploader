import './App.css';
import Landingpage from './pages/Landingpage';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Header></Header>
      <Routes>
        <Route path='/' element={<Landingpage></Landingpage>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
