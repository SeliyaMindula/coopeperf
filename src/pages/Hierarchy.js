
/*import React, { Component, useState, setState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Select from "react-select";
import { clone } from "lodash";
import Axios from 'axios';
import "../styles.css";

function isIncludingString(string, option) {
  let result = false;
  if (
    !string ||
    option.label.toString().includes(string) ||
    option.value.toString().includes(string)
  ) {
    result = true;
  }
  return result;
}


  /** 
  {
    "sector"[
      { "sectorId": 1, "name": "helthcare","groupId":1 },
      { "sectorId": 2, "name": "retail","groupId":1 }
    ] 
  }
  
  {
    "company" [
      { "companyId": 1, "name": "heamas hospital", "sectorId: 1"},
      { "companyId": 2, "name": "shop" , "sectorId: 1"}
    ] 
  }
  
  {
    "deparment" [
      { "Dparmentid": 1, "name": "IT",  "companyId: 1" },
      { "Dparmentid": 2, "name": "Finance", "companyId: 1" },
     { "Dparmentid": 3, "name": "HR", "companyId: 2" }
    ] 
  }

  {
    "subDepartment" [
      { "SubDparmentid": 1, "name": "ITSub1",  "depId: 1" },
      { "SubDparmentid": 2, "name": "Financesub1", "depId: 1" },
     { "SubDparmentid": 3, "name": "ITSub2", "depId: 2" }
    ] 
  }
  
  {
    "other" [
      { "otherid": 1, "name": "ITSub1",  subdepId: 1 },
      { "otherid": 2, "name": "Financesub1", subdepId: 1 },
      { "otherid": 3, "name": "Financesub2", subdepId: 2 },
     { "otherid": 4, "name": "ITSub2", subdepId: 3 }
    ] 
  }
  
 

*********Start write Data 


export default function Hierarchy() {

  const optionsSect = [

    { label: "Sector1", value: "Sector1", parent:"Group" },
    { label: "Sector2", value: "Sector2", parent:"Group" },
    { label: "Sector3", value: "Sector3" , parent:"Group"},
    { label: "Sector4", value: "Sector4" , parent:"Group"}
  ];
  
  
  const optionsComp = [
  
    { label: "Comp1",name:"Comp1", id:"Comp1", value: "Comp1", parent:"sector1" },
    { label: "Comp2",name:"Comp2", id:"Comp2",value: "Comp2", parent:"sector1" },
    { label: "Comp3",name:"Comp3", id:"Comp3",value: "Comp3", parent:"sector2" },
    { label: "Comp4",name:"Comp4", id:"Comp4",value: "Comp4", parent:"sector2" }
  ];
  
  
  const optionsDepart = [
  
    { label: "Dept1", value: "Dept1",parent:"Comp1" },
    { label: "Dept2", value: "Dept2",parent:"Comp1"  },
    { label: "Dept3", value: "Dept3",parent:"Comp2"  },
    { label: "Dept4", value: "Dept4",parent:"Comp2"  }
  ];
  
  const optionsSubDepart = [
    
    { label: "SubDept1", value: "SubDept1",parent:"Dept1" },
    { label: "SubDept2", value: "SubDept2",parent:"Dept2"},
    { label: "SubDept3", value: "SubDept3",parent:"Dept2"},
    { label: "SubDept4", value: "SubDept4",parent:"Dept3" }
  ];

  // set value for default selection
  const [selectedSect, setSelectedSect] = useState([]);
  const [selectedComp, setSelectedComp] = useState([]);
  const [selectedDepart, setSelectedDepart] = useState([]);
  const [selectedSubDepart, setSelectedSubDepart] = useState([]);
  const [selectedOther, setSelectedOther] = useState([]);
 

   // handle onChange event of the dropdown
  
  const handleChangeSect = (e) => {
  setSelectedSect(Array.isArray(e) ? e.map(x => x.value ) : [{}] );    
  //setSelectedSectparent(Array.isArray(e) ? e.map(x => x.parent ) : [] ); 
  }
   const handleChangeComp = (e) => {
    setSelectedComp(Array.isArray(e) ? e.map(x => x.value) : []);    
  }
  
  const handleChangeDepart = (e) => {
    setSelectedDepart(Array.isArray(e) ? e.map(x => x.value) : []);    
  }
  
  const handleChangeSubDepart = (e) => {
    setSelectedSubDepart(Array.isArray(e) ? e.map(x => x.value) : []);    
  }
  
  const handleChangeOther = (e) => {
    setSelectedOther(Array.isArray(e) ? e.map(x => x.value) : []);    
  }

  console.log(selectedSect);
  console.log(selectedComp);
  console.log(selectedDepart);
  console.log(selectedSubDepart);
  console.log(selectedOther);
  

  const url=""

  const [Data, setData]=useState({
    firstLevel:"",
    Email:"",
    Phone:"",
    Address:"",

  })


  function handle(e) {
    const newData = { ...Data}
    newData[e.target.id]=e.target.value
    setData(newData)
    console.log(newData)
  }

  function submit(e){
    e.preventDefault();
    Axios.post(url, {
      firstLevel:Data.firstLevel,
      Email:Data.Email,
      Phone:Data.Phone,
      Address:Data.Address,
      Company:optionsSubDepart.filter(obj=> selectedSubDepart.includes(obj.value))


     
       
    })
      .then(res =>{
        console.log(res.Data)
      })
  
    }
   
  
********* End of the Data write

  const [searchField, setsearchField] =useState (0);
    
 

 const onInputChangeComp = (string, { action }) => {
    if (action === "input-change") {
      setsearchField(string);
    }
  };

  const onInputChangeSect = (string, { action }) => {
    if (action === "input-change") {
      setsearchField(string);
    }
  };

  const onInputChangeDepart = (string, { action }) => {
    if (action === "input-change") {
      setsearchField(string);
    }
  };
  const onInputChangeSubDepart = (string, { action }) => {
    if (action === "input-change") {
      setsearchField(string);
    }
  };

 const filterOption = ({ label, value }, string) => {
    if (value === "all") {
      return true;
    } else if (string) {
      return label.includes(string) || value.toString().includes(string);
    } else {
      return true;
    }
  };

  return (
    
  <div>     
    <div className="App2">
      <div className="EmptyDiv"> </div>
      <div className="centerFromBox1">
        <form onSubmit={(e) =>submit(e)} >
          <br />
          <h1 className="h1">Company Hierarchy</h1>
          <br />
          <div className="lableInput">
            <div className="lableBox">
              <div>
                <label className="textlable">Hierarchy Level</label>
              </div>
              <br />
              <br /> <br />
              <div className="Header">
                <text>Hierarchy</text>
              </div>
              <br />
              <div className="textlable2">
                <text className="textlable2">Sectors</text>
              </div>
              <div className="textlable2">
                <text className="textlable2">Companies</text>
              </div>
              <div className="textlable2">
                <text className="textlable2">Departments</text>
              </div>
              <div className="textlable2">
                <text className="textlable">Sub Departments</text>
              </div>
              <div className="HeaderDetails">
                <text>Details</text>
              </div>
              <br />
              <div className="textlable2">
                <text className="textlable2">Email</text>
              </div>
              <div className="textlable2">
                <text className="textlable2">Address</text>
              </div>
              <div className="textlable2">
                <text>Phone</text>
              </div>
            </div>


            <div className="InputBox" >
              <select className="dropDown1"  onChange={(e)=> handle(e)} id="firstLevel" value={Data.firstLevel}  >
                <option disabled selected="true">Select First Level </option>
                
                <option value="Compnay" parent="1">Compnay</option>
                <option value="Group" parent="2">Group </option>
              
              
              </select>
              <br />
              <br />
              <br />
  

              <div>
                <a href="/Login">
                
                 <div style={{height:"32px", width:"20px"}}></div>
                </a>
              </div>
              <br /> <br />
             
              <div className="selectorDiv" >
                <Select
                  isMulti
                  filterOption={filterOption}
                  onInputChange={onInputChangeSect}
                  onChange={handleChangeSect}
                  value={optionsSect.filter(obj=> selectedSect.includes(obj.value))}
                  options={optionsSect}
                  id="Sector"
                  isMulti
                  isClearable
              
                />
              </div>
              <br />


              <div >
                <Select
                  
                  isMulti
                  filterOption={filterOption}
                  onInputChange={onInputChangeComp}
                  onChange={handleChangeComp}
                  value={optionsComp.filter(obj=> selectedComp.includes(obj.value))}
                  options={optionsComp}
                  id="Company"
                  isMulti
                  isClearable
              
                
                />

    
  
              </div>
              <br />

      

              <div>
                <Select
                  isMulti
                  filterOption={filterOption}
                  onInputChange={onInputChangeDepart}
                  onChange={handleChangeDepart}
                  value={optionsDepart.filter(obj=> selectedDepart.includes(obj.value))}
                  options={optionsDepart}
                  id="Department"
                  isMulti
                  isClearable
                />
              </div>
              <br />

              <div>
                <Select
                  isMulti
                  filterOption={filterOption}
                  onInputChange={onInputChangeSubDepart}
                  onChange={handleChangeSubDepart}
                  value={optionsSubDepart.filter(obj=> selectedSubDepart.includes(obj.value))}
                  options={optionsSubDepart}
                  id="SubDepartment"
                  isMulti
                  isClearable
                 
                />
              </div>
              <br />
              <br />
              <br />
              <br />

              <div>
                <input
                 onChange={(e)=> handle(e)} 
                 id="Email" 
                 value={Data.Email}
                  className="input2"
                  placeholder="  Email"
                  type="text"
                  name="Email"
                />
              </div>
              <br />

              <div>
                <input
                 onChange={(e)=> handle(e)} 
                 id="Address" 
                 value={Data.Address}
                  className="input2"
                  placeholder="  Address"
                  type="text"
                  name="Address"
                />
              </div>
              <br />

              <div>
                <input
                 onChange={(e)=> handle(e)} 
                 id="Phone" 
                 value={Data.Phone}
                  className="input2"
                  placeholder="  Phone"
                  type="text"
                  name="Phone"
                
                />
              </div>
              <br />
            </div>
          </div>

          <div>
            <button
              className="subButton2"
              onclick="#"
              type="submit"
              value="SUBMIT"
            >
              {" "}
              SUBMIT{" "}
            </button>
          </div>
        </form>
      </div>
    </div>

   </div> 
  );

}*/

import React, { useState, useEffect } from "react";
import "../styles.css";
import { db } from "../pages/firebase";
import { Component } from 'react'
import Select from 'react-select'



const Department = () => {
 
  const [EMail,seteMail] = useState("");
  const [Phone,setphone] = useState("");
  const [Address,setaddress] = useState("");
  const [Department,setdepartment] = useState("");
  const [SubDepartment,setsubDepartment] = useState("");
  const [Sector,setsector] = useState("");
  const [Company,setcompany] = useState("");
  
  
  const [loader, setLoader] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  setLoader(true);

  db.collection("Hierachy")
  .add({
   
    EMail: EMail,
    Phone: Phone,
    Address: Address,
    Department:Department,
    SubDepartment:SubDepartment,
    Sector:Sector,
    Company:Company
  })
  .then(() =>{
    setLoader(false);
    alert("Message has been submitted");
   
  })
  .catch((error) => {
    alert(error.message);
    setLoader(false);
   
  });

  
  seteMail("");
  setphone("");
  setaddress("");
  setdepartment("");
  setsubDepartment("");
  setsector("");
  setcompany("");


  
;}

//console.log(data)
  /* 
    Axios.post(url,data ).then((res)=>{
      const getid = res.data; 
      window.myGlobalVar =(getid); 
      console.log(getid)
      alert("Added")
        
          }).catch((err)=>{
            alert(err)
          })
*/
//--------------------Department------------------------------------

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

//----------------------Sector------------------------------------
const [arr1, setArr1] = useState([]);

const [SectorDe, setSectorDe] = React.useState([]);
React.useEffect(() => {
  db.collection("Sector")
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
      setArr1(temp);
      setSectorDe(arr1);
    });
}, [db]);

console.log(SectorDe);

//----------------------Company-----------------------------------------

const [arr2, setArr2] = useState([]);

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
      setArr2(temp);
      setCompanyDe(arr2);
    });
}, [db]);

console.log(CompanyDe);
//-------------------------SubDepartment--------------------------------------

const [arr3, setArr3] = useState([]);

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
      setArr3(temp);
      setSubDepartmentDe(arr3);
    });
}, [db]);

console.log(SubDepartmentDe);

//------------------------------------------------------------------------------

return (

  <div>     
     <div className="App2">
       <div className="EmptyDiv"> </div>
       <div className="centerFromBox1">
       <form onSubmit={handleSubmit} >
           <br />
           <h1 className="h1">Company Hierarchy</h1>
           <br />
           <div className="lableInput">
             <div className="lableBox">
               
               <br />
               <br /> <br />
               <div className="Header">
                 <text>Hierarchy</text>
               </div>
               <br />
               <div className="textlable2">
                 <text className="textlable2">Sectors</text>
               </div>
               <div className="textlable2">
                 <text className="textlable2">Companies</text>
               </div>
               <div className="textlable2">
                 <text className="textlable2">Departments</text>
               </div>
               <div className="textlable2">
                 <text className="textlable">Sub Departments</text>
               </div>
               <div className="HeaderDetails">
                 <text>Details</text>
               </div>
               <br />
               <div className="textlable2">
                 <text className="textlable2">Email</text>
               </div>
               <div className="textlable2">
                 <text className="textlable2">Address</text>
               </div>
               <div className="textlable2">
                 <text>Phone</text>
               </div>
             </div>
 
             
             <div className="InputBox" >
 
               <br />
               <br />
               <br />
   
 
               <div>
                 <a href="/Login">
                 
                  <div style={{height:"32px", width:"20px"}}></div>
                 </a>
               </div>
               <br /> <br />
              
               <div className="selectorDiv" >
                 <Select
                    onChange = {(e) => setsector(e.value)}
                    id="Sector"
                     required
                     name="Sector"
                    options={arr1}
               
                 />
               </div>
               <br />
 
 
               <div >
                 <Select
                    onChange = {(e) => setcompany(e.value)}
                    id="Company"
                     required
                     name="Company"
                    options={arr2}
                   
              
                 />
 
     
   
               </div>
               <br />
 
       
 
               <div>
                 <Select
                   onChange = {(e) => setdepartment(e.value)}
                   id="Department"
                    required
                    name="Department"
                   options={arr}
                 />
               </div>
               <br />
 
               <div>
                 <Select
                 onChange = {(e) => setsubDepartment(e.value)}
                 id="SubDepartment"
                 required
                name="SubDepartment"
                 options={arr3}
                  
      
                 />
               </div>
               <br />
               <br />
               <br />
               <br />
 
               <div>
                 <input
                  id="EMail" 
                  onChange = {(e) => seteMail(e.target.value)}
                  className="input2"
                  required
                  type="email"
                  name="Email"
                 />
               </div>
               <br />
 
               <div>
                 <input
                  onChange = {(e) => setaddress(e.target.value)}
                  id="Address" 
                   className="input2"
                   required
                   type="text"
                   name="Address"
                 />
               </div>
               <br />
 
               <div>
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
               <br />
             </div>
           </div>
 <br></br>
 <br></br>
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

