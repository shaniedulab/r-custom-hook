import './App.css';
import React ,{useRef,useEffect,useState} from 'react';
import useHttp from './Utilities/use-http';
// import Increment from './Components/Increment';
// import Decrement from './Components/Decrement';
function App() {
  let taskref=useRef();
  let[errorMessage,setErrorMessage]=useState(null)
  let [errorGet,sendGetRequest]=useHttp()
  let [errorPost,sendPostRequest]=useHttp()
  
  function onCreateTasks(data){
    data.then((d)=>{
      console.log(d)
    })
  }
  function createTask(){
    sendPostRequest('https://chathttp-default-rtdb.asia-southeast1.firebasedatabasea.app/task.json','POST',taskref.current.value,onCreateTasks)
  }
  
  function getAllTasks(data){
    data.then((tasks)=>{
    let taskList=[];
    for(let key in tasks){
      taskList.push({id:key,task:tasks[key]})
    }
      console.log(tasks)
      
    })
    setErrorMessage(errorGet)
  }
  
  useEffect(()=>{
    sendGetRequest('https://chathttp-default-rtdb.asia-southeast1.firebasedatabasea.app/task.json','GET',null,getAllTasks)
  },[])
  return (
    <div className="App">
      {/* <Increment></Increment>
      <Decrement></Decrement> */}
      
      <input type="text" ref={taskref} />
      <button onClick={createTask}>Create</button>
    </div>
  );
}

export default App;
