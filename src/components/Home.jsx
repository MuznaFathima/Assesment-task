import React from 'react'
import Sidebar from './Sidebar'
import './home.css'
import MembersList from './MembersList'



function Home() {
  return (
   <>
        <div className='home gradient__bg'>
    
            <Sidebar className='sidebar'/>
            <MembersList className='memberslist'/>
           
            
            
       
        </div>
        
   </>
  )
}

export default Home