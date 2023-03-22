import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from '../pages/Home';
import FirtsFloor from '../pages/FirstFloor';
import SecondFloor from '../pages/SecondFloor';
import ThirdFloor from '../pages/ThirdFloor';
import PageNotFound from '../pages/PageNotFound';



const Auth = () => {
  return (
    <div>


      <BrowserRouter>

        <Routes>

          <Route path="/alegre/" element={<Home />}></Route>
          <Route path="/alegre/supermarket" element={<FirtsFloor />}></Route>
          <Route path="/alegre/nails-spa" element={<SecondFloor />}></Route>
          <Route path="/alegre/sport-gym" element={<ThirdFloor />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>


        </Routes>




      </BrowserRouter>



    </div>


  )
}

export default Auth