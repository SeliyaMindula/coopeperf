/*import "../styles.css";
import React, { Component, useState }  from 'react';
import Axios from 'axios';

export default function AddLevel() {

  const url=""

  const [DepartmentDetails, setDepartmentDetails] = useState({
    DepartmentName:"",
    Phone:"",
    Email:"",
    Address:"",
    Head:"",
    Parent:"",

  });


  function handle(e) {
    const newData = { ...DepartmentDetails}
    newData[e.target.id]=e.target.value
    setDepartmentDetails (newData)
    console.log(newData)
  }

  function submit(e){
    e.preventDefault();
    Axios.post(url, {
      DepartmentName:DepartmentDetails.DepartmentName,
      Phone:DepartmentDetails.Phone,
      Email:DepartmentDetails.Email,
      Address:DepartmentDetails.Address,
      Head:DepartmentDetails.Head,
      Parent:DepartmentDetails.Parent,
             
    })
      .then(res =>{
        console.log(res.DepartmentDetails)
      })
  
    }

  return (
    <div className="App2">
     
     <div className="EmptyDiv"> </div>
      <div className="FormBox" >
        <br/>
        <p className="topic">Create Department</p>
        <form >
           <br/>
          <div>
            <p>Name</p>
            <input className="input2" type="text" onChange={(e)=> handle(e)} id="DepartmentName" value={DepartmentDetails.DepartmentName}/>
            <br/> <br/> 
            <p>Phone</p>
            <input className="input2" type="text" onChange={(e)=> handle(e)} id="Phone" value={DepartmentDetails.Phone}/>
            <br/>  <br/> 
            <p>Email</p>
            <input className="input2"  type="text"onChange={(e)=> handle(e)} id="Email" value={DepartmentDetails.Email} />
            <br/> <br/>
            <p>Address</p>
            <input className="input2" type="text" onChange={(e)=> handle(e)} id="Address" value={DepartmentDetails.Address}/>
            <br/> <br/> 
            <p>Head of the Department</p>
            <input className="input2" type="text" onChange={(e)=> handle(e)} id="Head" value={DepartmentDetails.Head}/>
            <br/><br/>  

            <p>Parent of the Department</p>
            <div>
              <select className="dropDown3" onChange={(e)=> handle(e)} id="Parent" value={DepartmentDetails.Parent} >
                <option disabled selected="true">Select First Level </option>
                <option value="Group">Sector 1 </option>
                <option value="Sector" >Sector 2</option>
                <option value="Compnay">Compnay 1</option>
                <option value="Compnay">Compnay 2</option>
             
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
import Select from 'react-select'


const Department = () => {
  const [Name,setname] = useState("");
  const [EMail,seteMail] = useState("");
  const [Phone,setphone] = useState("");
  const [Address,setaddress] = useState("");
  const [Head,sethead] = useState("");
  const [Parent,setparent] = useState("");

  const [loader, setLoader] = useState(false);

  

const handleSubmit = (e) => {
  e.preventDefault();
  setLoader(true);

  db.collection("Department")
  .add({
    Name: Name,
    EMail: EMail,
    Phone: Phone,
    Address: Address,
    Head: Head,
    Parent: Parent

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
  setaddress("");
  sethead("");
  setparent("");


;}

const [arr, setArr] = useState([]);

const [CompanyDe, setCompanyDe] = React.useState([]);
React.useEffect(() => {
  db.collection("Company")
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
      setCompanyDe(arr);
    });
}, [db]);

console.log(CompanyDe);

return (

<div>     
    <div className="App2">
    <div className="EmptyDiv"> </div>
    <div className="FormBox2" >
         <form onSubmit={handleSubmit} >
         <p className="topic">Create Department</p>
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
                 <text className="textlable2">Address</text>
                 <br></br>
               <br></br>
                 <input
                 onChange = {(e) => setaddress(e.target.value)}
                  id="Address" 
                   className="input2"
                   required
                   type="text"
                   name="Address"
                  
                 />
               </div>

               
              <div className="textlable2">
                 <text className="textlable2">Head of the Department</text>
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
export default Department;





