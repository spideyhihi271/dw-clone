import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './access/Css/Web/css/all.css';
import './access/Css/grid.css';
import Home from './Page/Home';
import Clocks from './Page/Clocks';
import Jewels from './Page/Jewels';
import Glass from './Page/Glass';
import WatchStrap from './Page/WatchStrap';
import Details from './Page/Details';
import WishList from './Page/WishList';
import RefeshPage from './Page/RefeshPage';
import CheckOut from './Page/CheckOut';
import ComfirmPage from './Page/ComfirmPage';
import Search from './Page/Search';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/'  element={<Home/>}/>
              <Route path='/watch'  element={<Clocks/>} exact/>
              <Route path='/watch/:type'  element={<Clocks/>}/>
              <Route path='/jewels'  element={<Jewels/>} exact/>
              <Route path='/jewels/:type'  element={<Jewels/>}/>
              <Route path='/glass'  element={<Glass/>} exact/>
              <Route path='/watchstrap'  element={<WatchStrap/>} exact/>
              <Route path='/watchstrap/:material'  element={<WatchStrap/>} />
              <Route path='/details/product=:id'  element={<Details/>}/>
              <Route path='/wishList'  element={<WishList/>} exact/>
              <Route path='/checkout'  element={<CheckOut/>} exact/>
              <Route path='/comfirmbill'  element={<ComfirmPage/>} exact/>
              <Route path='/search'  element={<Search/>} exact/>
              <Route path='/refeshed'  element={<RefeshPage/>} exact/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
