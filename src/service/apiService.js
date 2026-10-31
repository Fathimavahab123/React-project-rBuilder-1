import axiosService from "../api/axiosService";

//save resume API : called by ResumeInput component when finish button clicks

  export const saveResumeApi = async (resumeDetails) => {
      return await axiosService("POST","/resumes",resumeDetails)
}

//view resume API : called by view component when the page loads in browser

export const viewResumeApi = async (resumeId) => {
      return await axiosService("GET",`/resumes/${resumeId}`,{})
}

//view all resume API : called by saved component when the page loads in browser

export const getAllResumeApi = async () => {
      return await axiosService("GET",`/resumes/`,{})
}

//remove resume API : called by saved component when delete button clicks

export const deleteAllResumeApi = async (resumeId) => {
      return await axiosService("Delete",`/resumes/${resumeId}`,{})
}

//update resume API : called by edit component when update button clicks

export const editAllResumeApi = async (resumeId,resumeDetails) => {
      return await axiosService("PUT",`/resumes/${resumeId}`,resumeDetails)
}
//download resume API : called by view component when download button clicks

export const downloadResumeApi = async (resumeDetails) => {
      return await axiosService("POST",`/downloads`,resumeDetails)
}

// get download resume API : called by download component when page load in browser

export const getAllDownloadResumeApi = async () => {
      return await axiosService("GET",`/downloads`,{})
}
