import React from 'react'
import './navbar.css'
import image from '../assets/man.jpg'
import logo from '../assets/logo.png'
import { FaBell ,FaChevronDown,FaSearch} from 'react-icons/fa'; 
function Navbar() {
  return (
    <div className='navbar'>


        <div className="logo">

            <div className="logo-img">
            <img src={logo} alt="logo" style={{width:'65px',height:'60px'}}/>
            </div>
            
            <div className="logo-text">
                <p>Norsk</p>
                <p>Timeregestering</p>
            </div>

        </div>



        <div className="search">
        <FaSearch className="search-icon" /> 
        <input type="text" placeholder="Search..." className="search-input" />
     

        </div>
        <div className="admin">

           <FaBell color='white' className='iconbell'/>
       
                <img src={image} alt="man" style={{height:"70px",width:"70px"}} className='image-admin'/>
           
            <div className="name">
                <p>Luke Asote</p>
                <p>Admin for Asscociations</p>
            </div>
          
                <FaChevronDown color='white' className='icondown'/>
          



        </div>
  
    </div>
  )
}

export default Navbar