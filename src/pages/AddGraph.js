import React from "react";
import "../styles.css";
const style = {
  color: "gray"
};
const smallword = {
  fontSize: "9px",
  color: "#ccc",
  marginLeft: "5px"
};
const button1 = {
  width: "120px",
  height: "40px",
  border: "2px solid #6593F5",
  color: "#6593F5",
  backgroundColor: "white"
};
const button2 = {
  width: "120px",
  height: "40px",
  border: "1px solid #6593F5",
  color: "white",
  backgroundColor: "#6593F5",
  marginLeft: "24px"
};
const centerDiv = {
  borderRadius: "5px",
  width: "480px",
  height: "650px",
  backgroundColor: "#ffffff",
  flexDirection: "column",
  marginTop: "50px",
  marginBottom: "100px",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  paddingBottom:"50px",
};
const dropDown = {
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
const dropDown2 = {
  borderWidth: 1,
  paddingLeft: "10px",
  height: "40px",
  width: "160px",
  color: "#707070",
  marginLeft: "30px",
  borderColor: "#cccccc",
  outlineColor: "#6593f5",
  borderStyle: "solid",
  borderRadius: "5px"
};

const input = {
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
};

const input2 = {
  paddingLeft: "10px",
  borderWidth: "1px",
  borderColor: "#cccccc",
  borderStyle: "solid",
  borderRadius: "5px",
  height: "40px",
  width: "160px",
  marginBottom: "5px",
  outlineColor: "#6593f5",
  top: 2
};

const input3 = {
  paddingLeft: "10px",
  borderWidth: "1px",
  borderColor: "#cccccc",
  borderStyle: "solid",
  borderRadius: "5px",
  marginRight: "24px",
  height: "40px",
  width: "100px",
  marginBottom: "5px",
  outlineColor: "#6593f5",
  top: 2
};

export default function AddGraph() {
  return (
    <div className="App2">
      <div style={centerDiv}>
        <div style={{ marginLeft: "60px" }}>
          <p className="addpara">Add New Graph</p>
          <p style={style}>Label</p>
          <input type="text" style={input} /> <br />
          <br />
          <p style={style}>Type</p>
          <div>
            <select style={dropDown}>
              <option value="#"> Bar Graph </option>
              <option value="#"> Pie Chart </option>
              <option value="#">Box Plot</option>
              <option value="#"> </option>
              <option value="#"> </option>
            </select>
          </div>
          <br />
          <p style={style}>X - axis</p>
          <p style={smallword}>Last Value</p>
          <table>
            <tr>
              <td>
                <input type="text" style={input2} />
              </td>
              <td>
                <div>
                  <select style={dropDown2}>
                    <option value="#"> Month </option>
                    <option value="#"> Year </option>
                    <option value="#"> </option>
                    <option value="#"> </option>
                    <option value="#"> </option>
                  </select>
                </div>
              </td>
            </tr>
          </table>
          <br />
          <table>
            <tr>
              <td>
                <p style={smallword}>First Value</p>
                <input type="text" style={input3} />
              </td>
              <td>
                <p style={smallword}>Last Value</p>
                <input type="text" style={input3} />
              </td>
              <td>
                <p style={smallword}>Value</p>
                <input type="text" style={input3} />
              </td>
            </tr>
            <br />
          </table>
          <table style={{ marginLeft: "80px" }}>
            <tr>
              <td>
                <button style={button1}>cancle</button>
              </td>
              <td>
                <button style={button2}>Create Chart</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
