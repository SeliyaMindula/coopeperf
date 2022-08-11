import React from "react";
import OrganizationChart from "@dabeng/react-orgchart";
import MyNode from "./my-node";
import "../styles.css";

const CustomNodeChart = () => {
  
  const ds = {
    id: "n1",name: "",title: "Group ABC ",
    children: [
      {id: "n2", name: "", title: "Health Care",
       children: [ {id: "n5",name: "Ms. Juli",title: "Company1",
          children: [
              { id: "n6", name: "Mr. Vithana", title: "Department 1" },
          ]
        },

        { id: "n8", name: "Ms. Percy", title: "Company 2",
        children: [
          { id: "n6", name: "Mr. Vithana", title: "Department 1" },
          { id: "n7", name: "Mr. Gamage", title: "Department 2",
          children: [
            { id: "n6", name: "Mr. Vithana", title: "Sub Department 1" },
            { id: "n7", name: "Mr. Vithana", title: "Sub Department 2" }
          ] }
        ] }
      ] },

      {id: "n3",name: " ",title: "Information Technology",
        children: [
         
          {id: "n5",name: "Ms. Juli",title: "Company 3",
            children: [
                { id: "n6", name: "Mr. Vithana", title: "Department 1" },
              
              ]
          },

          { id: "n8", name: "Ms. Percy", title: "Company 4" }
        ]
      },

    ]
  };


  return (
   <div className="App2">
     <div className="EmptyDiv"> </div>

    <OrganizationChart
      datasource={ds}
      chartClass="myChart"
      NodeTemplate={MyNode}
    />
  </div>
    
  );
};

export default CustomNodeChart;
