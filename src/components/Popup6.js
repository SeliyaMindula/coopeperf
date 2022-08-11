import { faClosedCaptioning, faWindowClose } from "@fortawesome/fontawesome-free-regular";
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

export default function Popup6(props6){
  return  (props6.trigger6) ? (
<div style={popup}>
  <button style={btn} onClick={()=> props6.setTrigger6(false)}> 
  <FontAwesomeIcon className="icon" icon={faWindowClose}/>
  </button>
  {props6.children}

</div>
  ): "";
  
}