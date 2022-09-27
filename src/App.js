import React, { useEffect } from "react";
import axios from 'axios';
function App() {

  useEffect(()=>{
    
    async function infohandler()
    {
      await axios.get("http://07b3-112-196-153-10.ngrok.io/students/").then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
    }
    infohandler()
  },[])
 

  // let LocalTiming = new Date().toLocaleTimeString();
  // let LocalDateing = new Date().toLocaleDateString();
  return (
    <>
      <h1 className="App">Hello My name is karan kapoor 2</h1>
    </>
  );}

export default App;
