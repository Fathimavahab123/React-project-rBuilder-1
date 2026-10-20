import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import Edit from '../Components/Edit'
import { Link } from 'react-router-dom';
import { IoDocumentText } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import Preview from '../Components/Preview';


function View() {
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
          {/*navigation icons*/}
           <div className='d-flex justify-content-center align-items-center'>
              {/*download*/}
              <button className='btn'><FaFileDownload />Download CV</button>
              {/*edit*/}
              <Edit/>
              {/*all resumes*/}
              <Link to={'/resume-details' } className='btn mx-2'><IoDocumentText /> All Resumes</Link>
              {/*download history*/}
              <Link to={'/downloads' } className='btn mx-2'><IoMdRefresh /> Download History</Link>
              {/*back*/}
             <Link to={'/resume-details' } className='btn mx-2'><FaBackward /> Previous</Link>
         </div>
        <div className='p-5'>
          <Preview/>
        </div>
        </div>
        <div className='col-lg-2'></div>
      </div>
    </div>
  )
}

export default View
