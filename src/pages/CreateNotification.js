import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight, faBars, faLongArrowAltRight, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";
import Switch from "../components/Switch";
const centerdiv=
{
 
  width: "500px",
  height: "780px",
  backgroundColor:"#f4f4f4",
  flexDirection: "column",
  marginBottom: "50px",

};
const center=
{
  paddingTop:"50px",
  backgroundColor:"#f4f4f4"
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
  width:"200px",
  height:"40px",
  border:"1px solid #1E90FF",
  color:"white",
  borderRadius:"5px",
  backgroundColor:"#6593f5",
  marginLeft:"150px"
};
const input=
{
  paddingLeft: "10px",
  borderWidth: "1px",
  borderColor: "#cccccc",
  borderStyle: "solid",
  borderRadius: "5px",
  height: "40px",
  width: "350px",
  marginBottom: "5px",
  outlineColor: "#6593f5",
  top: 2
}

const dropdown2=
{
  width:"350px",
  backgroundColor:"white"
}
const dropdown = {
  borderWidth: 1,
  paddingLeft: "10px",
  height: "40px",
  width: "350px",
  borderWidth: "1px",
  color: "#707070",
  borderColor: "#cccccc",
  outlineColor: "#6593f5",
  borderStyle: "solid",
  borderRadius: "5px"
};


export default function CreateNotification() {
  return (

    <div className="App2">
  
    <div style={centerdiv}>
        <div style={center}> 
          <p style={para}>Create<br/>Notification</p>
           
           <p>Add User</p>
           <input style={input} type="text"/> <br/> <br/>

           
           <p>Frequency</p>
           <select style={dropdown} >
             <option>Monthly</option>
           </select><br/> <br/>

           <p>Condition</p>
           <select style={dropdown}>
             <option>Actual data less than the target</option>
           </select>
           <br/><br/><br/>

           <table border="0">
             <tr>
               <td>
                 <p style={{lineHeight:"0px"}}>Overdue Notification</p>
            
                <Switch/>
            
               </td>
               <td style={{padding:"0 0 0 80px"}}>
                 <p style={{lineHeight:"0px"}}>Summary Email</p>
                 <Switch/>
               </td>
             </tr><br/> <br/>
           </table>
           <p>Overdue After</p>
           <select style={dropdown}>
             <option>7</option>
           </select>
           <br/>
           <br/>  <br/>

           <button style={button1}>APPLY</button>
           
        </div>

    </div>
    </div>
  );
}
