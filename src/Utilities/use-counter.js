import {useState,useEffect} from "react";

function useCounter(inc=true){
    let [counter,setCounter]=useState(0);
    
    useEffect(()=>{
        setInterval(()=>{
            if(inc){
                setCounter(counter=> counter + 1);
            }else{
                setCounter(counter=> counter - 1);
            }
        },1000)
    },[])
    
    return counter;
}

export default useCounter