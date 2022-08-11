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

export default function Popup1(props1){
  return  (props1.trigger1) ? (
<div style={popup}>
  <button style={btn} onClick={()=> props1.setTrigger1(false)}> 
  <FontAwesomeIcon className="icon" icon={faWindowClose}/>
  </button>
  {props1.children}

</div>
  ): "";
  
}*/

import { faClosedCaptioning, faWindowClose } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles.css";
import "../styles.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const percentage = 90;
const percentage1 = 28.4;
const btn=
{
  position:"absolute",
  marginLeft:"380px",
  marginBottum:"100px",
  border:"none",
  backgroundColor:"white",
  
}

const popup={
  backgroundColor:"#f8f8f8",//blue
  width:"450px",
  height:"350px",
  padding:"20px",
  
}

const container={
  width: '400px', 
  height:"300px" ,
  backgroundColor:"#fcfcfc"/*red */,
  display:"flex", 
  flexDirecton:"row"
}

const container1={
  width: '185px', 
  height:"100%",
  paddingTop:"20px",
  paddingLeft:"10px",
  backgroundColor:"#ffffff",
  borderRadius: '8px'
}

const container2={
  width: '200px', 
  height:"100%",
  paddingTop:"20px",
  paddingLeft:"20px",
  backgroundColor:"#ffffff",
  borderRadius: '8px'
}

export default function Popup1(props1){
  return  (props1.trigger1) ? (
<div style={popup}>
  <button style={btn} onClick={()=> props1.setTrigger1(false)}> 
  <FontAwesomeIcon className="icon" icon={faWindowClose}/>
  </button>
  <div style={container}>
          
            <div style={container1}>
              
                <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        strokeWidth={8}
                        styles={buildStyles({
                            pathColor:`rgba(194, 204, 252)`,
                            trailColor: '#c2ccfc',
                        })}
                        />
                        <h4 style={{textAlign:"center",marginTop:'20px',}}>Total Active Goals</h4>

              
            </div>
            <div style={container2}>
            
              <CircularProgressbar
                      value={percentage1}
                      text={`${percentage1}%`}
                      strokeWidth={10}
                      styles={buildStyles({
                          pathColor:`rgba(81, 240, 60)`,
                          trailColor: '#ededed',
                      })}
                      />

                      <h4 style={{textAlign:"center",marginTop:'20px',}}>Overall Progress</h4>
            
                    </div>
                      
            
  </div>

</div>
  ): "";
  
}