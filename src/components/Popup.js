/*import { faClosedCaptioning, faWindowClose } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles.css";

const btn=
{
  position:"absolute",
  marginLeft:"350px",
  padding:"0",
  border:"none",
  backgroundColor:"#ffffff",
}

const popup={
  backgroundColor:"#f8f8f8f8",
  padding:"10px",
 
}

export default function Popup(props){
  return  (props.trigger) ? (
  <div style={popup}>
  <button style={btn} onClick={()=> props.setTrigger(false)}>
     <FontAwesomeIcon className="icon" icon={faWindowClose}/>
       
     </button>
  {props.children}

  </div>
  ): "";
  
}*/

import { faClosedCaptioning, faWindowClose } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const percentage = 22;
const btn=
{
  position:"absolute",
  marginLeft:"380px",
  marginBottum:"100px",
  border:"none",
  backgroundColor:"fcfcfc",//white
  
}

const popup={
  backgroundColor:"#f8f8f8",//blue
  width:"450px",
  height:"350px",
  padding:"20px",
  marginLeft:"90px"
  
}
const circle={
  borderRadius:"50%",
  width: "34px",
  height: "34px",
  padding: "4px",
  background: "#f2bf8d",
  color: "#000",
  fontWeight:"bold",
  textAlign: "center",
}

const container={
  width: '400px', 
  height:"300px" ,
  backgroundColor:"#fcfcfc"/*red */,
  display:"flex", 
  flexDirecton:"row"
}
const container1={
  width: '200px', 
  height:"100%",
  paddingTop:"20px",
  paddingLeft:"20px",
  backgroundColor:"#ffffff",/*green */
}
const container2={
  width: '200px', 
  height:"100%",
  marginTop:"50px",
  paddingLeft:"50px"
}


export default function Popup(props){
  return  (props.trigger) ? (
  <div style={popup}>
    <button style={btn} onClick={()=> props.setTrigger(false)}>
      <FontAwesomeIcon className="icon" icon={faWindowClose}/>
      </button>
        <div style={container}>
          
            <div style={container1}>
              <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      strokeWidth={10}
                      styles={buildStyles({
                          pathColor:`rgba(242, 150, 45)`,
                          trailColor: '#ededed',
                      })}
                      />
                      <h4 style={{textAlign:"center",marginTop:'20px',}}>Aligned Goals</h4>
            </div>

            <div style={container2}>
              <table >
                <tr >
                  <td><div style={circle}>3</div></td>
                  <td> Org Goals</td>
                </tr>
                <tr style={{padding:"15px"}}>
                  <td><div style={circle}>6</div></td>
                  <td> Dep Goals</td>
                </tr>
                <tr style={{padding:"15px"}}>
                  <td><div style={circle}>11</div></td>
                  <td> Other Goals</td>
                </tr>
              </table>
            </div>
            
        </div>
        

  </div>
  ): "";
  
}