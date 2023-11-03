import { baseUrl } from "./baseurl";
import { commonRequest } from "./commonRequest";

//Add Videos - API

export const addVideo=async (body)=>{
    return await commonRequest('POST',`${baseUrl}/videos`,body)
}

//get videos from backend

export const getAllVideos=async ()=>{
    return await commonRequest('GET',`${baseUrl}/videos`,{})
}

//delete video from backend server

export const deleteVideo = async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
}

//add category to database

export const addCategory=async (body)=>{
    return await commonRequest('POST',`${baseUrl}/categories`,body)
}

//get all categories to front-end
export const getAllCat=async ()=>{
    return await commonRequest('GET',`${baseUrl}/categories`,{})
}

//delete category

export const delCategory=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/categories/${id}`,{})
}

