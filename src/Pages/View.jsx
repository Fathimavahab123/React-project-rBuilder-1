import React, { useEffect, useRef, useState } from 'react'
import { FaFileDownload } from "react-icons/fa";
import Edit from '../Components/Edit'
import { Link, useParams } from 'react-router-dom';
import { IoDocumentText } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import Preview from '../Components/Preview';
import { downloadResumeApi, viewResumeApi } from '../service/apiService';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function View() {

  const [resume, setResume] = useState()
  const previewRef = useRef()

  const { id } = useParams()
  console.log(resume);

  useEffect(() => {
    getResumeDetails()
  }, [])

  const getResumeDetails = async () => {
    const response = await viewResumeApi(id)
    if (response.status === 200) {
      setResume(response.data)

    }
  }

  const downloadCV = async ()=>{
     const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)
    canvas.toBlob(async (imgFile)=>{
      // create formdata to send file via API
      const formData=new FormData()
      formData.append("file",imgFile)
      formData.append("upload_preset","My-resume")
      const result=await fetch("https://api.cloudinary.com/v1_1/m7zrwfr2/image/upload",{
        method:"POST", 
        body:formData
      })
      const serverData=await result.json()
      const url=serverData.secure_url
      //console.log(url);
      generatePDF(url)
      
    })
  }

  const generatePDF = async (resumeImg) => {
    const pdf = new jsPDF()
    const imageWidth = pdf.internal.pageSize.getWidth()
    const imageHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(resumeImg, "PNG", 0, 0, imageWidth, imageHeight)

    const today=new Date()
    const timeStamp=`${today.toLocaleDateString()},${today.toLocaleTimeString()}`
    console.log(timeStamp);

    const result=await downloadResumeApi({timeStamp,resumeImg,resumeId:resume.id,jobRole:resume.job})

    if(result.status===201){
      //download cv
      pdf.save(`${resume.fullname} CV.pdf`)
    }
  }


  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
          {/*navigation icons*/}
          <div className='d-flex justify-content-center align-items-center'>
            {/*download*/}
            <button onClick={downloadCV} className='btn'><FaFileDownload />Download CV</button>
            {/*edit*/}
            <Edit resumeDetails={resume} setResumeDetails={setResume} />
            {/*all resumes*/}
            {/* <Link to={'/resume-details' } className='btn mx-2'><IoDocumentText /> All Resumes</Link> */}
            {/*download history*/}
            {/* <Link to={'/downloads' } className='btn mx-2'><IoMdRefresh /> Download History</Link> */}
            {/*back*/}
            <Link to={'/resume-details'} className='btn mx-2'><FaBackward /> Previous</Link>
          </div>
          <div ref={previewRef} className='p-5'>
            <Preview resumeDetails={resume} />
          </div>
        </div>
        <div className='col-lg-2'></div>
      </div>
    </div>
  )
}

export default View
