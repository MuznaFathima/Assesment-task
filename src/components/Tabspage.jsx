import React, { useState } from 'react'
import './tabspage.css'
function Tabspage() {
    const [activeTab, setActiveTab] = useState("admin");
  return (
    <>
   
   
   <div className="tabs-container">



               <div className='tabs'>
    
               
                  <button
                    className={`tab-button ${activeTab === "admin" ? "active" : ""}`}
                    onClick={() => setActiveTab("admin")}
                  >
                    Admin
                  </button>
                  <button
                    className={`tab-button ${activeTab === "member" ? "active" : ""}`}
                    onClick={() => setActiveTab("member")}
                  >
                    Member
                  </button>
              
        
                     </div>



               <div className="status">



              <p>Total members:2000</p>
              <p>current used:1800</p>


                 </div>




          </div>
    
       


    

   
   </>
  )
}

export default Tabspage