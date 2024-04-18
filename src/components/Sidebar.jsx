
import "./sidebar.css";
import {
  FaUser,
  FaCog,
  FaProjectDiagram,
  FaTasks,
  FaFileAlt,
  FaComments,
  FaChartBar,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";


function Sidebar() {
  
  return (
    <>

  


       
      <div className="sidebar">
        <div className="list-items">
        <ul className="list">
          <li>
            <FaUser className="icon" /> Profile
          </li>
          <li>
            <FaUser className="icon"  /> Users
          </li>
          <li>
            <FaCog className="icon" /> Control Panel
          </li>
          <li>
            <FaProjectDiagram className="icon"  /> Projects
          </li>
          <li>
            <FaTasks className="icon"  /> Tasks
          </li>
          <li>
            <FaFileAlt className="icon"  /> Logs
          </li>
          <li>
            <FaComments className="icon" /> Group Chats
          </li>
          <li>
            <FaChartBar className="icon" /> Reports
          </li>
        </ul>

            
        </div>
        
        <div className="social-icons">

            
        <FaFacebook className="icon" />
        <FaTwitter className="icon" />
        <FaLinkedin className="icon" />



     
      </div>

     
<p style={{fontSize:'11px',color:"white",position:'relative',top:"10px"}}> &copy; 2024 Norsk. All rights reserved.</p>
        
       
      </div>
      
    
</>
     
   
  );
}

export default Sidebar;
