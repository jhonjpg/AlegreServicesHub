import { useState } from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = ({DarkModeClick, color, textColor}) => {


  

  return (
<>


{/* Desktop Navbar */}
<nav className="informationNav " style={{ '--dark-color': color, '--text-color': textColor}}>

<div className="w-100 h-100 d-flex justify-content-center align-items-center ">
<div className="phoneNumber"><i className="bi bi-telephone-fill"></i>  809-456-3232 <NavLink to="/alegre/#contacto" className="w-100 text-white bg-secondary"><i className="bi bi-person-lines-fill"></i>  Contactanos</NavLink>
</div>
<div className="email"><i className="bi bi-envelope-fill"></i>  alegregtv@hotmail.com</div>
<NavLink to="/alegre/" className="logo"> 
<div id="logo" className="">A</div>
</NavLink>
<div className="instagram"><i className="bi bi-instagram"></i>  instagram</div>
<div className="location"><i className="bi bi-geo-alt-fill"></i>  localizanos 
<NavLink to="/alegre/#contacto"  className="w-100 text-white bg-secondary"><i className="bi bi-file-person-fill"></i>  Nosotros
</NavLink>
</div>
</div>

</nav>






<nav  style={{ '--dark-color': color, '--text-color': textColor}} className="desktopNav ">

<div className="loading">
<ul className="">


  {/* <li className="nav-item" > <NavLink exact="true" to="/alegre/" activeclassname="active" >  Home</NavLink></li> */}
  <li className="nav-item" > <NavLink to="/alegre/supermarket" activeclassname="active" >  1 <span>FL</span> </NavLink></li>
  <li className="nav-item" > <NavLink to="/alegre/nails-spa" activeclassname="active" >  2<span>FL</span> </NavLink></li>
  <li className="nav-item" > <NavLink to="/alegre/sport-gym" activeclassname="active">  3<span>FL</span> </NavLink></li>

</ul>


<div  onClick={DarkModeClick}  className="moon">
<i   style={{ '--dark-color': color}} className="bi bi-moon-fill"></i>    
    </div>

    </div>
</nav>



{/* Other Devices Navbar */}
<nav className="informationNavPhone " style={{ '--dark-color': color, '--text-color': textColor}}>

<div className="w-100 h-100 d-flex justify-content-center align-items-center ">
<div className="contacto-sm">  Contactanos
</div>
<NavLink to="/alegre/" className="logo"> 
<div id="logo" className="">A</div>
</NavLink>
<div className="nosotros-sm">  Nosotros
</div>
</div>

</nav>


</>  )
}

export default Navbar