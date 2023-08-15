// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Menu from './pages/Menu';
import Location from "./pages/Location";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/menu' element={<Menu />} />
    //     <Route path='/location' element={<Location />} />
    //     <Route path='/blog' element={<Blog />} />
    //     <Route path='/contact' element={<Contact />} />
    //   </Routes>
    // </Router>
    <div className="App">
      <Home />
      <Menu />
      <Location />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
