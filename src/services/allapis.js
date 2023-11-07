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


//Watch History Section

//API call to post all video details to backend

export const addHistory=async(body)=>{
     return await commonRequest('POST',`${baseUrl}/histories`,body)
}

//get All Watch History Details

export const getAllHistory=async()=>{
    return await commonRequest('GET',`${baseUrl}/histories`,{})
}

//Delete History.

export const delHistory=async (id)=>{

    return await commonRequest('DELETE',`${baseUrl}/histories/${id}`,{})
}

//Drag and Drop

//Access single video thru id

export const getsingleVideo=async (id)=>{
    return await commonRequest('GET',`${baseUrl}/videos/${id}`,{})
}

//Update video details to Categories

export const updateCategory=async (id,body)=>{
    return await commonRequest('PUT',`${baseUrl}/categories/${id}`,body)
}

//Deletion of video from categories from DB.

export const deletesvCat=async(id)=>
{
    await commonRequest('DELETE',`${baseUrl}/categories/${id}`)
}