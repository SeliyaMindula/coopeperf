import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight, faBars, faLongArrowAltRight, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";
import Switch from "../components/Switch";

const centerdiv=
{
  marginTop:"50px",
  marginBottom:"100px",
  width: "750px",
  height: "450px",
  backgroundColor:"#f4f4f4",
  flexDirection: "column",
  fontFamily:"calibri",
};

const center=
{
  paddingTop:"40px",
  paddingLeft:"70px"
};
const para=
{
  fontSize:"25px",
  fontWeight:"900",
}
const toggle1=
{
  fontSize:"100px",
  color:"#1E90FF"
};
const button=
{
  backgroundColor:"lightgray",
  width:"100px",
  height:"50px",
};
const button1=
{
  width:"160px",
  height:"40px",
  border:"1px solid #6593F5",
  color:"white",
  borderRadius:"5px",
  backgroundColor:"#6593F5",
  marginLeft:"400px"
};


export default function Configuration() {
  return (

<div className="App2">
  
    <div style={centerdiv}>
        <div style={center}> 
          <p style={para}>Configurations</p>
           <br/>
           <p>Enable/Disable User</p>
           <table>
             <tr>
            <td><input className="input2" style={{width:"250px"}}type="text"/> </td>
            <td style={{paddingLeft:"50px"}}> <Switch/></td>
           </tr>
           </table>

           <p>Time Zone</p>
           <input className="input2" style={{width:"350px"}} type="text"/>

           <p>Enable/Disable Alerts</p>
           <Switch/>
           
           <br/>
           <br/>

           <button style={button1}>SAVE CHANGES</button>
           
        </div>

    </div>
    </div>
  );
}
