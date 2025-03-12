import { END_POINT } from "../utils/constants";

export const handleSavee = async(jobId)=>{
  //console.log("handle save called")
  try {
    const response =  await fetch(`${END_POINT}/savelater/post?id=${jobId}`,{
      method:"POST",
      credentials:"include",
     })
     const data  = await response.json();
    
    return data.message
  } catch (error) {
    //console.log(error(
    return "Something went wrong"
  }
}
export const handleRemovee = async(jobId)=>{
  //console.log("handle remove called")
  try {
    const response =  await fetch(`${END_POINT}/savelater/delete?id=${jobId}`,{
      method:"DELETE",
      credentials:"include",
     })
     const data  = await response.json();
     if(response.ok){
      return true;
     }
     else{
      return false;
     }
     //console.log(data.message)
     
  } catch (error) {
    //console.log(error)
    return false;
  }
}
