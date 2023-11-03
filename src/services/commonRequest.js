import axios from "axios";

//creating API Structure so that if we change variables we can re use it

export const commonRequest=async (method,url,body)=>{
    let config={
        method,
        url,
        data:body
    }

  return await axios(config).then(result=>{
    return result;
  }).catch(err=>{
    return err;
  })
}