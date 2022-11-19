import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Destination from './pages/Destination';
import Technology from './pages/Technology';
import Crew from './pages/Crew';
import Vostok from './pages/Vostok';
import Venera from './pages/Venera'
import Mothership from './pages/Mothership';
import Dracarys from './pages/Dracarys';
import Footer from './components/Footer';
import Mars from './pages/Mars';
import Moon from './pages/Moon';
import Earth from './pages/Earth';
import Iss from './pages/Iss';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes >
        <Route element={<Home />} path='/' exact>
        </Route>
        <Route element={<Destination />} path='/destination'>
        </Route>
        <Route element={<Crew />} path='/crew'>
        </Route>
        <Route element={<Technology />} path='/technology'>
        </Route>
        <Route element={<Vostok />} path='/vostok'>
        </Route>
        <Route element={<Venera />} path='/venera-heavy'>
        </Route>
        <Route element={<Mothership />} path='/mothership'>
        </Route>
        <Route element={<Dracarys />} path='/dracarys'>
        </Route>
        <Route element={<Mars />} path='/destination/mars'>
        </Route>
        <Route element={<Moon />} path='/destination/moon'>
        </Route>
        <Route element={<Earth />} path='/destination/earth'>
        </Route>
        <Route element={<Iss />} path='/destination/iss'>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
