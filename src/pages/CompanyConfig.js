import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight, faBars, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";
import React, { Component }  from 'react';
const centerdiv=
{
 
  width: "650px",
  height: "600px",
  backgroundColor: "white",
  flexDirection: "column",
  marginLeft: "350px",

};
const center=
{
  padding:"50px"
};
const span1=
{
  fontSize:"18px",
  fontFamily:"arial",
  marginLeft:"30px"
};
const span2=
{
  fontSize:"15px",
  fontFamily:"arial",
  marginLeft:"30px",
  color:"gray"
};
const icon=
{
  fontSize:"20px",
  marginTop:"0px",
  marginLeft:"550px", 
};

export default function CompanyConfig() {
  return (
    <div style={centerdiv}>
        <div style={center}> 
         <div>
         <p className="topic">Company Configuration</p>
         <br/>
         <table border="0">
        

      

         

         <tr>
             <td>
               <FontAwesomeIcon className="arrowicon" icon={faArrowRight}/>
             </td>
                <td >
                  <p >
                  <a style={{ textDecoration: 'none', color:'Black' }} href= "/CreateCompany">  <span style={span1}>Create Company</span><br/> </a> 
                    <span style={span2}>Description</span>
                  </p>
               </td>
         </tr>

         <tr>
             <td>
               <FontAwesomeIcon className="arrowicon" icon={faArrowRight}/>
             </td>
                <td >
                  <p >
                    <a style={{ textDecoration: 'none', color:'Black' }} href= "/CreateDepartment">  <span style={span1}>Create Department</span><br/> </a> 
                    <span style={span2}>Description</span>
                  </p>
               </td>
         </tr>

         <tr>
             <td>
               <FontAwesomeIcon className="arrowicon" icon={faArrowRight}/>
             </td>
                <td >
                  <p >
                  <a style={{ textDecoration: 'none', color:'Black' }} href= "/CreateSubDepartment">  <span style={span1}>Create Sub Department</span><br/> </a> 
                    <span style={span2}>Description</span>
                  </p>
               </td>
         </tr>
         
         <tr>
             <td>
               <FontAwesomeIcon className="arrowicon" icon={faArrowRight}/>
             </td>
                <td >
                  <p >
                  <a style={{ textDecoration: 'none', color:'Black' }} href= "/CreateSector">  <span style={span1}>Create Sector</span><br/> </a> 
                    <span style={span2}>Description</span>
                  </p>
               </td>
         </tr>

         <tr>
             <td>
               <FontAwesomeIcon className="arrowicon" icon={faArrowRight}/>
             </td>
                <td >
                  <p >
                  <a style={{ textDecoration: 'none', color:'Black' }} href= "/CreateStrategy">  <span style={span1}>Create Strategy</span><br/> </a> 
                    <span style={span2}>Description</span>
                  </p>
               </td>
         </tr>

         <tr>
             <td>
               <FontAwesomeIcon className="arrowicon" icon={faArrowRight}/>
             </td>
                <td >
                  <p >
                  <a style={{ textDecoration: 'none', color:'Black' }} href= "/CreateGoal">  <span style={span1}>Create Goal</span><br/> </a> 
                    <span style={span2}>Description</span>
                  </p>
               </td>
         </tr>

         <tr>
             <td>
               <FontAwesomeIcon className="arrowicon" icon={faArrowRight}/>
             </td>
                <td >
                  <p >
                  <a style={{ textDecoration: 'none', color:'Black' }} href= "/CreateKPI">  <span style={span1}> Create KPI</span><br/> </a> 
                    <span style={span2}>Description</span>
                  </p>
               </td>
         </tr>


         <tr>
             <td>
               <FontAwesomeIcon className="arrowicon" icon={faArrowRight}/>
             </td>
                <td >
                  <p >
                  <a style={{ textDecoration: 'none', color:'Black' }} href= "/CreateActionPlan">  <span style={span1}>Create Action Plan</span><br/> </a> 
                    <span style={span2}>Description</span>
                  </p>
               </td>
         </tr>
         </table>
         </div>
       
        </div>

    </div>
  );
}
