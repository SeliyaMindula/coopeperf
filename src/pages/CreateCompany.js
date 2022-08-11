/*import "../styles.css";
import React, { Component, useState }  from 'react';
import Axios from 'axios';

export default function AddLevel() {

  const url=""

  const [CompanyDetails, setCompanyDetails] = useState({
    CompanyName:"",
    Phone:"",
    Email:"",
    Address:"",
    Head:"",
    Parent:"",

  });


  function handle(e) {
    const newData = { ...CompanyDetails}
    newData[e.target.id]=e.target.value
    setCompanyDetails (newData)
    console.log(newData)
  }

  function submit(e){
    e.preventDefault();
    Axios.post(url, {
      CompanyName:CompanyDetails.CompanyName,
      Phone:CompanyDetails.Phone,
      Email:CompanyDetails.Email,
      Address:CompanyDetails.Address,
      Head:CompanyDetails.Head,
      Parent:CompanyDetails.Parent,
             
    })
      .then(res =>{
        console.log(res.CompanyDetails)
      })
  
    }




  return (
    <div className="App2">
     
     <div className="EmptyDiv"> </div>
      <div className="FormBox" >
        <br/>
        <p className="topic">Create Company</p>
        <form >
           <br/>
          <div>
            <p>Name</p>
            <input className="input2" type="text" onChange={(e)=> handle(e)} id="CompanyName" value={CompanyDetails.CompanyName}/>
            <br/> <br/> 
            <p>Phone</p>
            <input className="input2" type="text"onChange={(e)=> handle(e)} id="Phone" value={CompanyDetails.Phone}/>
            <br/>  <br/> 
            <p>Email</p>
            <input className="input2"  type="text"onChange={(e)=> handle(e)} id="Email" value={CompanyDetails.Email}/>
            <br/> <br/>
            <p>Address</p>
            <input className="input2" type="text"onChange={(e)=> handle(e)} id="Address" value={CompanyDetails.Address}/>
            <br/> <br/> 
            <p>Head of the Company</p>
            <input className="input2" type="text"onChange={(e)=> handle(e)} id="Head" value={CompanyDetails.Head}/>
            <br/><br/>  

            <p>Parent of the Comapny</p>
            <div>
              <select className="dropDown3" onChange={(e)=> handle(e)} id="Parent" value={CompanyDetails.Parent}>
                <option disabled selected="true">Select Parent </option>
                <option value="Group">Group </option>
                <option value="Sector" >Sector 1</option>
                <option value="Sector" >Sector 2</option>
                <option value="Sector" >Sector 3</option>
              
                
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



const Company = () => {
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

  db.collection("Company")
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

            return (

              <div>     
                 <div className="App2">
     
                  <div className="EmptyDiv"> </div>
                  <div className="FormBox2" >
                  <form onSubmit={handleSubmit} >
                     <p className="topic">Create Company</p>
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

                          

                           
                           

                       
                       <div>
                         <button
                           className="Addbutton"
                           onclick="#"
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
          export default Company;
        
