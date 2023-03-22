import { useState } from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = ({DarkModeClick, color, textColor}) => {


  

  return (
<>


{/* Desktop Navbar */}
<nav className="informationNav " style={{ '--dark-color': color, '--text-color': textColor}}>

<div className="phoneNumber"><i className="bi bi-telephone-fill"></i>  809-456-3232</div>
<div className="email"><i className="bi bi-envelope-fill"></i>  alegregtv@hotmail.com</div>
<NavLink to="/alegre/" className="logo"> 
<div id="logo" className="">A</div>
</NavLink>
<div className="instagram"><i className="bi bi-instagram"></i>  instagram</div>
<div className="location"><i className="bi bi-geo-alt-fill"></i>  localizanos</div>


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

{/* <nav className="navbarTophone overflow-hidden "  >


<ul className={responsiveClass}>


  <li onClick={handleScroll}> <NavLink exact="true" to="/theKathCafeteria/" activeclassname="active" >  Home</NavLink></li>
  <li onClick={handleScroll}> <NavLink to="/theKathCafeteria/menu" activeclassname="active" >  Menu</NavLink></li>
  <li onClick={handleScroll}> <NavLink to="/theKathCafeteria/gallery" activeclassname="active" >  Galeria</NavLink></li>
  <li onClick={handleScroll}> <NavLink to="/theKathCafeteria/contact" activeclassname="active">  Contacto</NavLink></li>

</ul>


<button
  onClick={reponsiveMenu}
  className="navbar-toggler w-100 text-white cursor-pointer "
  type="button"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
  </svg>
</button>

<div className="w-25    ">
<a   id="intagram" className="w-100 fs-6 d-flex flex-column gap-1 justify-content-center align-items-center text-white" href="https://www.instagram.com/the_kath_cafeteria/">
<svg  id="intagramLogo" xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-instagram w-25" viewBox="0 0 16 16">
<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
</svg>

Instagram</a>
</div>




</nav> */}






</>  )
}

export default Navbar