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

export default function Popup4(props4){
  return  (props4.trigger4) ? (
<div style={popup}>
  <button style={btn} onClick={()=> props4.setTrigger4(false)}> 
  <FontAwesomeIcon className="icon" icon={faWindowClose}/>
  </button>
  {props4.children}

</div>
  ): "";
  
}