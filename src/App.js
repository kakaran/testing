import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css"
function App() {

  const [datas, setDatas] = useState([]);
  const [name, setName] =useState();
  const [age, setAge] =useState();
  useEffect(()=>{
    async function infohandler()
    {
      try {
        const result =  (await axios.get("https://studentdb.pythonanywhere.com/students/",[])).data
        console.log(result[0].fields.Name);
        setDatas(result);
      } catch (error) {
        console.log(error);
      }
    }
    infohandler();
  },[])

  const data2={
    name,
    age
    }
console.log(typeof age);
  const onhandleSubmit = async ()=>{
    try {
      const data = await axios.post("https://studentdb.pythonanywhere.com/savestudent/",new URLSearchParams(data2))
    console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

 
  // let LocalTiming = new Date().toLocaleTimeString();
  // let LocalDateing = new Date().toLocaleDateString();
  return (
    <>
      <h1 className="App">Made by Tushar and Karan</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>AGE</th>
        </tr>
        {datas.map((value,index)=>{
          return(
              <tr>
                <td>{index+1}</td>
                <td>{value.fields.Name}</td>
                <td>{value.fields.Age}</td>
              </tr>
          )
        })}
        
      </table>

      <h1>Add the Name and Age</h1>
      <div className="formContainer">
        <label htmlFor="Name">Name</label>
        <input type="text"  id="Name" placeholder="Name" onChange={(e)=>{
          setName(e.target.value);
        }}/>
        <label htmlFor="Age">Age</label>
        <input type="text"  id="Age" placeholder="Age"onChange={(e)=>{
          setAge(parseInt(e.target.value));
        }}/>
        <button onClick={()=>{
          onhandleSubmit();
        }}>Submit</button>
      </div>
    </>
  );}

export default App;
