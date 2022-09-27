import React, { useEffect, useState } from "react";
import axios from 'axios';
function App() {

  const [data , setData] = useState([{}]);
  useEffect(()=>{
    // async function infohandler()
    // {
    //   // await axios.get("https://studentdb.pythonanywhere.com/students/",{}).then((res)=>{
    //   //   console.log(res);
    //   //   setData(res.data);
    //   //   console.log(data);
    //   // }).catch((err)=>{
    //   //   console.log(err);
    //   // })
    //   fetch(
    //     "https://studentdb.pythonanywhere.com/students/")
    //                 .then((res) => res.json())
    //                 .then((json) => {
    //                     this.setState({
    //                         items: json,
    //                         DataisLoaded: true
    //                     });
    //                 })
        
    // }
    // infohandler()
    const url = "https://6aa5-112-196-153-10.ngrok.io/students/";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  },[])
 

  // let LocalTiming = new Date().toLocaleTimeString();
  // let LocalDateing = new Date().toLocaleDateString();
  return (
    <>
      <h1 className="App">Hello My name is karan kapoor 2</h1>
    </>
  );}

export default App;
