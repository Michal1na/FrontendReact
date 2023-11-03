import React, {useState} from 'react';
import {Link} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from "@mui/icons-material/Menu";
import {MenuData} from "./MenuData";
import './Menu.css';

export default function ShowMenu() {
    const[sidebar, setSidebar] = useState(false);

   function showSidebar () {setSidebar(!sidebar)}

   return(
       <>
     <div className= "navbar nav-text">
         <Link to="#" className='menu-bars'>
            <MenuIcon onClick={showSidebar}/>
         </Link>
     </div>
           <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
               <ul className ='nav-menu-items' onClick={showSidebar}>
                   <li className="navbar-toggle nav-text">
                       <Link to ="#" className ='menu-bars'>
                            <CloseIcon/>
                       </Link>
                   </li>

                   {MenuData.map((item, index) => {
                       return(
                           <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>
                                        {item.title}
                                    </span>
                                </Link>
                           </li>
                       );
                   })}
               </ul>
           </nav>

       </>
    )
}
