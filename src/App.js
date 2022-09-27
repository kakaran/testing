import React, { useEffect, useState } from "react";
import axios from 'axios';
function App() {

  const [data , setData] = useState([{}]);
  useEffect(()=>{
    async function infohandler()
    {
      await axios.get("https://studentdb.pythonanywhere.com/students/",{}).then((res)=>{
        console.log(res);
        setData(res.data);
        console.log(data);
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
