import React, { useEffect, useState } from "react";
import axios from 'axios';
function App() {

  const [datas, setDatas] = useState([]);
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
 
  // let LocalTiming = new Date().toLocaleTimeString();
  // let LocalDateing = new Date().toLocaleDateString();
  return (
    <>
      <h1 className="App">Hello My name is karan kapoor 2</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>AGE</th>
        </tr>
        {datas.map((value,index)=>{
          return(
            <div>
              <tr>
                <td>{index+1}</td>
                <td>{value.fields.Name}</td>
                <td>{value.fields.Age}</td>
              </tr>
            </div>
          )
        })}
        
      </table>
    </>
  );}

export default App;
