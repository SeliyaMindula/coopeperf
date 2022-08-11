import "../styles.css";
import React, { Component, useState }  from 'react';
import Axios from 'axios';

const inputstyle = {
    paddingLeft: "10px",
    borderWidth: "1px",
    borderColor: "#cccccc",
    borderStyle: "solid",
    borderRadius: "5px",
    height: "40px",
    width: "250px",
    marginBottom: "5px",
    outlineColor: "#6593f5",
    top: "2",
    marginRight:"50px"
 
};

const addButton = {
    backgroundColor: "#6593f5",
    color: "#ffffff",
    height: "40px",
    width: "30%",
    borderColor: "#6593f5",
    borderRadius: "5px",
    borderStyle: "solid",
    borderWidth: "3px",
    marginLeft: "60%",
  };

const centerdivGoal = {
  borderRadius: "5px",
  width: "700px",
  height: "500px",
  backgroundColor: "#ffffff",
  flexDirection: "column",
  marginTop:"50px",
  padding:"50px"
};
const style = {
  width: "150px",
  marginLeft: "260px",
  marginLeft: "450px"
};
const dropdown = {
    marginRight:"50px",
    paddingLeft: "10px",
    borderWidth: "1px",
    borderColor: "#cccccc",
    borderStyle: "solid",
    borderRadius: "5px",
    height: "40px",
    width: "250px",
    marginBottom: "5px",
    outlineColor: "#6593f5",
    top: "2",
};

const Headtag = {
  width: "550px",
  height: "35px"
};

export default function AddLevel() {

  const url=""

  const [AcPlanDetails, setAcPlanDetails] = useState({
    AcPlanName:"",
    Target:"",
    Period:"",
    ApplyFor:"",

  });


  function handle(e) {
    const newData = { ...AcPlanDetails}
    newData[e.target.id]=e.target.value
    setAcPlanDetails (newData)
    console.log(newData)
  }

  function submit(e){
    e.preventDefault();
    Axios.post(url, {
      AcPlanName:AcPlanDetails.AcPlanName,
      Target:AcPlanDetails.Target,
      Period:AcPlanDetails.Period,
      ApplyFor:AcPlanDetails.ApplyFor,
             
    })
      .then(res =>{
        console.log(res.AcPlanDetails)
      })
  
    }



  return (
    <div className="App2">
     
    <div className="EmptyDiv"> </div>
      <div className="App">
        <div style={centerdivGoal}>
          <br />
          <p className="topic">Create Action Plan</p>
          <form>
            <br />
            <div>
              <table border="0">
                <tr>
                  <td>
                    <p>Action Plan</p>
                    <input type="text"  style={inputstyle} onChange={(e)=> handle(e)} id="AcPlanName" value={AcPlanDetails.AcPlanName} />
                  </td>

                  <td>
                    <p>Target</p>
                    <input type="text" style={inputstyle} onChange={(e)=> handle(e)} id="Target" value={AcPlanDetails.Target} />
                  </td>
                </tr>

                <tr>
                  <td>
                    <p>Period</p>
                    <select style={dropdown} onChange={(e)=> handle(e)} id="Period" value={AcPlanDetails.Period} >
                      <option disabled selected="true ">-Period-</option>
                      <option>Yearly</option>
                      <option>Monthly</option>
                      <option>Weekly</option>
                    </select>
                  </td>

                  <td>
                    <p style={{ marginLeft: "0px" }}>Apply For</p>
                    <select style={dropdown} onChange={(e)=> handle(e)} id="ApplyFor" value={AcPlanDetails.ApplyFor} >
                      <option disabled selected="true">-Apply For-</option>
                      <option>1 Year</option>
                      <option>2 Year</option>
                      <option>3 Year</option>
                      <option>4 Year</option>
                    </select>
                  </td>
                </tr>
              </table>
              <br />

           
              <br />
              <div>
                <button style={addButton}>Add</button>
              </div>
            </div>
            <br />

            <br />
            <br />

            <br />
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
