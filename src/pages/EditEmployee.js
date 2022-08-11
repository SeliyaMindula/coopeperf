import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";
import image from "../components/assets/user.png"

const style = {
  width: "150px",
  marginLeft: "260px"
};
const inputstyle=
{
  paddingLeft: "10px",
  borderWidth: "1px",
  borderColor: "#cccccc",
  borderStyle: "solid",
  borderRadius: "5px",
  height: "40px",
  width: "350px",
  marginBottom: "15px",
  outlineColor: "#6593f5",
  
};
const button2=
{
  width:"350px",
  height:"40px",
  borderRadius:"3px",
  border:"1px solid #6593F5",
  color:"white",
  backgroundColor:"#6593F5",
};
const icon=
{
  fontSize:"20px",
  marginTop:"60px",
  marginLeft:"250px",
  
};

const form ={
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

export default function AddLevel() {
  return (
    <div className="App2">
    <div className="EmptyDiv"></div> 
    <div >    
      <div className="centerDiv"> 
        <br />
        <p className="topic2">Employee Details</p>
        <img className="image" src={image} style={{marginLeft:"300px"}} alt=""/>
        <form style={form} >
          <br />
          <div>
            <p className="lable">Name</p>
            <input placeholder="Enter Full Name"  style={inputstyle}type="text" />

            <p className="lable">Job Role</p>
            <input placeholder="Enter Job Role" style={inputstyle}type="text" />

            <p className="lable">Department</p>
            <input placeholder="Enter Department" style={inputstyle}type="text" />


            <p className="lable">Sub Department</p>
            <input placeholder="Enter Sub Department" style={inputstyle}type="text" />

            <p className="lable">Level</p>
            <select placeholder="Enter Sub Department" style={inputstyle}type="text" >
              <option> Sector </option>
              <option> Company </option>
              <option> Department </option>
              <option> Sub Department </option>
            </select>

            <p className="lable">Email Address</p>
            <input placeholder="Enter Address" style={inputstyle}type="text" />

            <p className="lable">Phone </p>
            <input placeholder="Enter Phone Numvber" style={inputstyle}type="text" />

            <br /> <br />
           
            <div>
              <button style={button2}>SUBMIT</button>
            </div>
          </div>
          
        </form>
      </div>
     
       
      
     </div>
    
   
    </div>
  );
}
