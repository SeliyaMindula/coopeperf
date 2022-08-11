/*import "../styles.css";
import React, { Component, useState }  from 'react';
import Axios from 'axios';

export default function CreateSector() {

  const url=""

  const [SectorDetails, setSectorDetails] = useState({
    SectorName:"",
    Phone:"",
    Email:"",
    Address:"",
    Parent:"",

  });


  function handle(e) {
    const newData = { ...SectorDetails}
    newData[e.target.id]=e.target.value
    setSectorDetails (newData)
    console.log(newData)
  }

  function submit(e){
    e.preventDefault();
    Axios.post(url, {
      SectorName:SectorDetails.SectorName,
      Phone:SectorDetails.Phone,
      Email:SectorDetails.Email,
      Address:SectorDetails.Address,
      Parent:SectorDetails.Parent,
             
    })
      .then(res =>{
        console.log(res.SectorDetails)
      })
  
    }


  return (
    <div className="App2">
     
     <div className="EmptyDiv"> </div>
      <div className="FormBox2" >
        <br/>
        <p className="topic">Create Sector</p>
        <form >
           <br/>
          <div>
            <p>Name</p>
            <input className="input2" type="text" onChange={(e)=> handle(e)} id="SectorName" value={SectorDetails.SectorName}/>
            <br/> <br/> 
            <p>Phone</p>
            <input className="input2" type="text" onChange={(e)=> handle(e)} id="Phone" value={SectorDetails.Phone}/>
            <br/>  <br/> 
            <p>Email</p>
            <input className="input2"  type="text"onChange={(e)=> handle(e)} id="Email" value={SectorDetails.Email}/>
            <br/> <br/>
            <p>Address</p>
            <input className="input2" type="text" onChange={(e)=> handle(e)} id="Address" value={SectorDetails.Address}/>
            <br/> <br/> 
         
            <p>Parent of the Sector</p>
            <div>
              <select className="dropDown3" onChange={(e)=> handle(e)} id="Parent" value={SectorDetails.Parent}>
                <option disabled selected="true">Select Parent</option>
                <option value="Group">Group </option>
                <option value="Compnay">Compnay</option>
                
             
              </select>
              </div>
              <br/><br/><br/>
              <div>
            <button  className="Addbutton">Add</button>
            </div>
            
          </div>
          <br />
          
         
        </form>
      </div>
    </div>
  );
}*/
import React, { useState, useEffect } from "react";
import "../styles.css";
import { db } from "../pages/firebase";
import Select from 'react-select'



const Sector = () => {
  const [Name,setname] = useState("");
  const [NoCom,setnoCom] = useState("");
  const [Parent,setparent] = useState("");
  const [Head,sethead] = useState("");
  const [loader, setLoader] = useState(false);

  

const handleSubmit = (e) => {
  e.preventDefault();
  setLoader(true);

  db.collection("Sector")
  .add({
    Name: Name,
    NoCom: NoCom,
    Parent: Parent,
    Head: Head,

  })
  .then(() =>{
    setLoader(false);
    alert("Message has been submitted");
   
  })
  .catch((error) => {
    alert(error.message);
    setLoader(false);
   
  });

  setname("");
  setnoCom("");
  setparent("");
  sethead("");
  
;}

const [arr, setArr] = useState([]);

const [SubDepartmentDe, setSubDepartmentDe] = React.useState([]);
React.useEffect(() => {
  db.collection("Sub Department")
    .get()
    .then((querySnapshot) => {
      let temp=[];
      querySnapshot.docs.map((doc) =>
    {
     
      let data = doc.data();
      console.log(data);
         temp.push({ value: data.Name, label: data.Name}) 
        
    } 
      );
      setArr(temp);
      setSubDepartmentDe(arr);
    });
}, [db]);

console.log(SubDepartmentDe);

  return (
    <div className="App2">
     
     <div className="EmptyDiv"> </div>
      <div className="FormBox2" >
        <br/>
        <p className="topic">Create Sector</p>
        <form onSubmit={handleSubmit} >
           <br/>
          <div>
            <p>Name</p>
            <input className="input2" 
            type="text" 
            onChange = {(e) => setname(e.target.value)}
             id="Name" 
            />

            <br/> <br/> 
            <p>Number Of Companies</p>
            <input className="input2"
             type="text" 
              id="Phone" 
              onChange = {(e) => setnoCom(e.target.value)} 
              />

            <br/>  <br/> 
           

              
              <div className="textlable2">
                 <text className="textlable2">Head of the Sector</text>
                 <br></br>
               <br></br>
                 <Select
                 onChange = {(e) => sethead(e.value)}
                  id="Head"
                   required
                   type="text"
                   name="Head"
                  options={arr}
                 />
               </div>
               
         
              <br/><br/><br/>
              <div>
            <button  className="Addbutton">Add</button>
            </div>
            
          </div>
          <br />
          
         
        </form>
      </div>
    </div>
  );
}
export default Sector;

