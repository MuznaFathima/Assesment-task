import React, { useEffect, useState } from 'react'
import './Members.css'
import { FaEdit, FaPage4, FaPen, FaTrash } from 'react-icons/fa';

function Members() {

const[members,setMembers]=useState([])

const handleSubmit = async () => {
    await fetch('https://core.teemify.ai/users/list').then(result => {
      result.json().then(res => {
        console.log(res.data);
        setMembers(res.data)
        
     



      })

    })
  }
  const handleDelete=async(userId)=>{
    try {
        const response = await fetch(`https://core.teemify.ai/user/delete/${userId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
         
          handleSubmit();
          console.log('Member deleted successfully');
        } else {
          console.error('Failed to delete member');
        }
      } catch (error) {
        console.error('Error deleting member:', error);
      }
  }
  useEffect(() => {
     handleSubmit()
  
   
  }, [])
  return (
    <div>
    
    <table className="table" style={{marginTop:"30px",boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Operation</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => (
          <tr key={member._id.$oid}>
            <td><img src={member.profile} alt={member.name} style={{height:"30px"}} /></td>
            <td>{member.name}</td>
            <td>{member.email}</td>
            <td>{member.phone}</td>
            <td><button style={{ backgroundColor: member.status === 'active' ? '#eaf7eb' : '#f5cfcc', color:member.status==='active' ?"#4eb054":"red",border:'none',borderRadius:"5px"}}>{member.status}</button></td>
            <td><button className="delete-button" onClick={() => handleDelete(member._id.$oid)}>
    <FaTrash />
  </button>
  <button className='edit'><FaEdit/></button>
  <button className='edit' > <FaPen/></button>
  </td>
            <td><button className='login-buttons'>Login</button></td>
          </tr>
        ))}
      </tbody>
    </table>
 
  </div>
  )
}

export default Members