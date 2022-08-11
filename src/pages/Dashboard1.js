import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import React from "react"; 
import "../styles.css";
import Popup from "../components/Popup";
import Popup1 from "../components/Popup1";
import Popup2 from "../components/Popup2";
import Popup3 from "../components/Popup3";
import Popup4 from "../components/Popup4";
import Popup5 from "../components/Popup5";
import Popup6 from "../components/Popup6";
import { useState } from "react";


const dropdown=
{
  border:"None",
  padding:"5px",
  width:"180px",
  borderRadius:"5px",
  marginLeft:"680px",
  backgroundColor:"#F8f8F8f8",
};

const button1=
{
  backgroundColor:"white",
  padding:"5px 20px 5px 0",
  marginLeft:"30px",
  marginTop:"2px"
};

const button2=
{
  backgroundColor:"#f8f8f8f8",
  border:"none",
  marginLeft:"15px",
  marginRight:"15px",
  color:"#686868",
};

const div=
{
  height: "40px",
  width:"530px",
  backgroundColor:"#f8f8f8f8",
  marginLeft:"250px",
  borderRadius:"25px",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  
};
const td=
{
   width:"300px",
   height:"150px",
   backgroundColor:"white",
   borderRadius:"5px",
   marginLeft:"20px",
   
  
};


export default function Dashboard1() {
  const[buttonPopup, setButtonPopup]=useState(false);
  const[buttonPopup1, setButtonPopup1]=useState (false);
  const[buttonPopup2, setButtonPopup2]=useState (false);
  const[buttonPopup3, setButtonPopup3]=useState (false);
  const[buttonPopup4, setButtonPopup4]=useState (false);
  const[buttonPopup5, setButtonPopup5]=useState (false);
  const[buttonPopup6, setButtonPopup6]=useState (false);
  
  const[buttonl, buttonload]=useState (false);

 
    
    
 
  
  

  return (
    <div className="App5">
      <div className="dashcontainer">
              <table>
                <tr>
                    <td className="td">
                    <button className="button1">Dashboard</button>
                    </td>
                    <td className="td">
                    <button className="button1">My Goals</button>
                    </td>
                    <td className="td">
                    <button className="button1">Company Goals</button>
                    </td>
                    <td className="td">
                    <button className="button1">My Team</button>
                    </td>
                    <td className="td">
                    <button className="button1">My Organization</button>
                    </td>
                    <td className="td">
                    <button className="button1">Import/Export</button>
                    </td>
                </tr>
              </table>
              <br/>
              <div >
              <select style={dropdown}>
                  <option>SELECT LEVEL</option>
              </select>
              <br/>   
              <br/>  
              <br/>   
               <div style={div}>
                 <button onClick={()=> {
                   setButtonPopup(true)
                   setButtonPopup1(true)
                   setButtonPopup2(true)
                   setButtonPopup3(true)
                   setButtonPopup4(true)
                   setButtonPopup5(true)
                   setButtonPopup6(true)
                }}style={button2}>My Dashboard</button>

                <button style={button2}>Team Dashboard</button>
                </div>

                 <button style={button2}>Org Dashboard</button>
               </div>


               <br/> <br/>
               <table className="table" style={{marginLeft:"140px"}} >
                  <tr>
                        <td>
                        <Popup trigger={buttonPopup}  setTrigger={setButtonPopup}>
                          <h1 style={td}>
                         </h1>
                        </Popup>
                      </td>
                      <td >
                        <Popup1  trigger1={buttonPopup1} setTrigger1={setButtonPopup1}>
                          <h1 style={td}></h1>
                        </Popup1>
                      </td>
                    </tr>
                    <tr>
                    <td >
                        <Popup2  trigger2={buttonPopup2} setTrigger2={setButtonPopup2}>
                          <h1 style={td}></h1>
                        </Popup2>
                      </td>
                      <td >
                        <Popup3   trigger3={buttonPopup3} setTrigger3={setButtonPopup3}>
                          <h1 style={td}></h1>
                        </Popup3>
                      </td>
                      <td >
                        <Popup4   trigger4={buttonPopup4} setTrigger4={setButtonPopup4}>
                          <h1 style={td}></h1>
                        </Popup4>
                      </td>
                      <td >
                        <Popup5   trigger5={buttonPopup5} setTrigger5={setButtonPopup5}>
                          <h1 style={td}></h1>
                        </Popup5>
                      </td>
                      <td >
                        <Popup6   trigger6={buttonPopup6} setTrigger6={setButtonPopup6}>
                          <h1 style={td}></h1>
                        </Popup6>
                      </td>
                    </tr>
               </table>

               </div>
              
              
      </div>
   
  );
}