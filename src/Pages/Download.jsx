import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

function Download() {
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items-center'>
         <h3>Downloaded Resume History</h3>
         <Link to={'/resume-details'}><FaArrowLeft /> Back</Link>
      </div>
      <div className='row my-5'>
      {/*duplicate the row according to the resume count*/}
      <div className='col-lg-4'>
        <div style={{height:'300px'}}className='rounded shadow p-3'>
          <h6>Review at : Time stamp</h6>
           <div className='mt-4 text-center'>
          <Link to={'/resume/:id'}><img className='w-50' src="https://resumesector.com/wp-content/uploads/2024/12/Modern-Resume.jpg" alt="resume image" /></Link>
           </div>
        </div>
      </div>
      </div>
   </div>
  )
}

export default Download
