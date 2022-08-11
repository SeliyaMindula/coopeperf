import "./styles.css";
import React, { Component, useState, setState } from "react";

import ReactDOM from "react-dom";
import Select from "react-select";
import { clone } from "lodash";

function isIncludingString(string, option) {
  let result = false;
  if (
    !string ||
    option.label.toString().includes(string) ||
    option.value.toString().includes(string)
  ) {
    result = true;
  }
  return result;
}

const options = [
 
  { label: "Goal", value: "Goal" },
  { label: "Strategy", value: "Strategy" },
  { label: "KPI", value: "KPI" },
  { label: "Action Plan", value: "Action Plan" },
  { label: "Sub Action Plan", value: "Sub Action Plan" },
  
];


export default function Hierarchy() {
  const setState = {
    searchField: null,
    values: []
  };

  const onChange = (opt, { option }) => {
    let newOpts = opt;
    let string = useState.searchField;

    if (option && option.value === "all") {
      let filteredOptions = clone(options);

      filteredOptions = filteredOptions.filter(
        (filteredOption) =>
          isIncludingString(string, filteredOption) &&
          !newOpts.includes(filteredOption)
      );

      string = null;
      newOpts = newOpts
        .concat(filteredOptions)
        .filter((newOpt) => newOpt.value !== "all");
    }
    setState({
      searchField: string,
      values: newOpts
    });
  };
  const onInputChange = (string, { action }) => {
    if (action === "input-change") {
      setState({
        searchField: string
      });
    }
  };

  const filterOption = ({ label, value }, string) => {
    if (value === "all") {
      return true;
    } else if (string) {
      return label.includes(string) || value.toString().includes(string);
    } else {
      return true;
    }
  };

  return (
    <div className="App3">
      <div className="centerFromBox2">
        <form>
          <br />
          <h1 className="h1"> Target Setup </h1>
          <br />
          <div className="lableInput2">
            <div className="lableBox2">
            

              <div> 
                <text className="textlable">Perspective</text>
              </div>
              <br />  <br />  <br />
             

              <div>
                <text className="textlable">Goal / Objective</text>
              </div>
              <br />   <br /><br />
              

              <div>
                <text className="textlable">Strategy</text>
              </div>
              <br /> <br /> <br />
             

              <div>
                <text className="textlable">KPI</text>
              </div>
            </div>

            <div className="InputBox2">

              <div>
              <Select isMulti filterOption={this.filterOption} onInputChange={this.onInputChange} onChange={this.onChange} options={options} value={this.values} />    

              </div><br/> <br />

              <div>
              <Select isMulti filterOption={this.filterOption} onInputChange={this.onInputChange} onChange={this.onChange} options={options} value={this.values} />    
              </div>
              <br /> <br />

              <div>
              <Select isMulti filterOption={this.filterOption} onInputChange={this.onInputChange} onChange={this.onChange} options={options} value={this.values} />    
              </div>
              <br /> <br />

              <div>
              <Select isMulti filterOption={this.filterOption} onInputChange={this.onInputChange} onChange={this.onChange} options={options} value={this.values} />    
              </div>
            </div>
          </div>

        <div className="buttonDiv">
          <input className="subButton2" type="submit" value="SUBMIT" />
         </div>

        </form>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Hierarchy />, rootElement);
