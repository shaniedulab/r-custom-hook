import { useState } from "react";
function useHttp(){
    let[errorMessage,setErrormessage]=useState(null)
    
    function sendHttpRequest(url,method,body,action){
        fetch(url,{
            method:method,
            body:body ? JSON.stringify(body):null
        }).then((response)=>{
            if(!response.ok){
                throw new Error("Something went wrong please try again leater")
            }
            let data=response.json();
            action(data);
        }).catch((error)=>{
            setErrormessage(error.message)
        })
    }
    
    return [errorMessage,sendHttpRequest]
}

export default useHttp