/*import "../styles.css";
import React, { Component, useState }  from 'react';
import Axios from 'axios';

export default function AddLevel() {


  const url=""

  const [SubDepartmentDetails, setSubDepartmentDetails] = useState({
    SubDepartmentName:"",
    Phone:"",
    Email:"",
    Address:"",
    Head:"",
    Parent:"",

  });


  function handle(e) {
    const newData = { ...SubDepartmentDetails}
    newData[e.target.id]=e.target.value
    setSubDepartmentDetails (newData)
    console.log(newData)
  }

  function submit(e){
    e.preventDefault();
    Axios.post(url, {
      SubDepartmentName:SubDepartmentDetails.SubDepartmentName,
      Phone:SubDepartmentDetails.Phone,
      Email:SubDepartmentDetails.Email,
      Address:SubDepartmentDetails.Address,
      Head:SubDepartmentDetails.Head,
      Parent:SubDepartmentDetails.Parent,
             
    })
      .then(res =>{
        console.log(res.SubDepartmentDetails)
      })
  
    }

  return (
    <div className="App2">
     
     <div className="EmptyDiv"> </div>
      <div className="FormBox" >
        <br/>
        <p className="topic">Create Sub Department</p>
        <form >
           <br/>
          <div>
            <p>Name</p>
            <input className="input2" type="text" onChange={(e)=> handle(e)} id="SubDepartmentName" value={SubDepartmentDetails.SubDepartmentName}/ >
            <br/> <br/> 
            <p>Phone</p>
            <input className="input2" type="text" onChange={(e)=> handle(e)} id="Phone" value={SubDepartmentDetails.Phone}/>
            <br/>  <br/> 
            <p>Email</p>
            <input className="input2"  type="text" onChange={(e)=> handle(e)} id="Email" value={SubDepartmentDetails.Email}/>
            <br/> <br/>
            <p>Address</p>
            <input className="input2" type="text"onChange={(e)=> handle(e)} id="Address" value={SubDepartmentDetails.Address}/>
            <br/> <br/> 
            <p>Head of the Department</p>
            <input className="input2" type="text" onChange={(e)=> handle(e)} id="Head" value={SubDepartmentDetails.Head}/>
            <br/><br/>  

            <p>Parent of the Department</p>
            <div>
              <select className="dropDown3" onChange={(e)=> handle(e)} id="Parent" value={SubDepartmentDetails.Parent}>
                <option disabled selected="true">Select First Level </option>
                <option value="Group">Department 1 </option>
                <option value="Sector" >Department 2 </option>
                <option value="Compnay">Department 3</option>
                
             
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
}
*/

import React, { useState, useEffect } from "react";
import "../styles.css";
import { db } from "../pages/firebase";
import { Component } from 'react'
import Select from 'react-select'





const SubDepartment = () => {
  const [Name,setname] = useState("");
  const [EMail,seteMail] = useState("");
  const [Phone,setphone] = useState("");
  const [Head,sethead] = useState("");
 

  const [loader, setLoader] = useState(false);

  

const handleSubmit = (e) => {
  e.preventDefault();
  setLoader(true);

  db.collection("Sub Department")
  .add({
    Name: Name,
    EMail: EMail,
    Phone: Phone,
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
  seteMail("");
  setphone("");
  sethead("");
  
;}

const [arr, setArr] = useState([]);

const [DepartmentDe, setDepartmentDe] = React.useState([]);
React.useEffect(() => {
  db.collection("Department")
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
      setDepartmentDe(arr);
    });
}, [db]);

console.log(DepartmentDe);

return (

  <div>     
    <div className="App2">
    <div className="EmptyDiv"> </div>
    <div className="FormBox2" >
         <form onSubmit={handleSubmit} >
         <p className="topic">Create Sub Department</p>
           <br />
          
              
             <div className="textlable2">
                 <text>Name</text>
               <br></br>
               <br></br>
                 <input
                   id="Name"
                   onChange = {(e) => setname(e.target.value)}
                   className="input2"
                   type="text"
                   name="Name"
                   required
                 />
               </div>


               
               <div className="textlable2">
                 <text>Phone</text>
                 <br></br>
               <br></br>
                 <input
                  onChange = {(e) => setphone(e.target.value)}
                  id="Phone" 
              
                   className="input2"
                   required
                   type="text"
                   name="Phone"
                   maxlength="10"
                   pattern="\d{10}"
                 
                 />
               </div>
              


               <div className="textlable2">
                 <text className="textlable2">Email</text>
                 <br></br>
               <br></br>
                 <input
                  id="EMail" 
                   onChange = {(e) => seteMail(e.target.value)}
                   className="input2"
                   required
                   type="email"
                   name="Email"
                 />
               </div>


               <div className="textlable2">
                 <text className="textlable2">Head of the Sub Department</text>
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
               

              
        
 
           <div>
             <button
               className="subButton2"
               type="submit"
               value="SUBMIT">
              
               submit
             </button>
           </div>
         </form>
       </div>
     </div>
 
    </div>
   );

};
export default SubDepartment;


  