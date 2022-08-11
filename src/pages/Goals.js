import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import React from "react"; 
import "../styles.css";
import Popup from "../components/Popup";
import Popup1 from "../components/Popup1";
import Popup2 from "../components/Popup2";
import Popup3 from "../components/Popup3";
import Popup4 from "../components/Popup4";
import Popup5 from "../components/Popup5";
import Popup6 from "../components/Popup6";

import { useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Radar  } from "react-chartjs-2";
import { Bubble  } from "react-chartjs-2";
import { PolarArea  } from "react-chartjs-2";






const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

const datadoughnut = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [8, 20, 6, 8, 1, 6],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const datapolararea = {
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [20, 8, 5, 2, 16],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }]
};


const dataaxis = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [15, 8, 3, 5, 6, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: '# of No Votes',
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-2',
    },
  ],
};

const dataradar = {

  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 100, 81, 22, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

const databubble = {
  datasets: [{
      label: 'First Dataset',
      data: [{
          x: 2,
          y: 8,
          r: 20,
        }],
      backgroundColor: 'rgb(255, 99, 132)'
    },
    {
      label: 'Second Dataset',
      data: [{
          x: 5,
          y: 6,
          r: 30,
        }],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: 'Third Dataset',
      data: [{
          x: 9,
          y: 3,
          r: 40,
        }],
      backgroundColor: 'rgb(75, 192, 192)',
    }]
}


const datagrouped = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Red Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: '# of Blue Votes',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: '# of Green Votes',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};


const rand = () => Math.round(Math.random() * 20 - 10);

const datamulti = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
};


const dropdown=
{
  border:"None",
  padding:"5px",
  width:"180px",
  borderRadius:"5px",
  marginLeft:"680px",
  backgroundColor:"#F8f8F8f8",
};

const button1=
{
  backgroundColor:"white",
  padding:"5px 20px 5px 0",
  marginLeft:"30px",
  marginTop:"2px"
};

const button2=
{
  backgroundColor:"#f8f8f8f8",
  border:"none",
  marginLeft:"15px",
  marginRight:"15px",
  color:"#686868",
};

const div=
{
  height: "40px",
  width:"530px",
  backgroundColor:"#f8f8f8f8",
  marginLeft:"250px",
  borderRadius:"25px",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  
};
const td=
{
   width:"400px",
   height:"420px",
   backgroundColor:"white",
   borderRadius:"5px",
   marginLeft:"0px",
   padding: "30px",
};



export default function Dashboard1() {
  const[buttonPopup, setButtonPopup]=useState(false);
  const[buttonPopup1, setButtonPopup1]=useState (false);
  const[buttonPopup2, setButtonPopup2]=useState (false);
  const[buttonPopup3, setButtonPopup3]=useState (false);
  const[buttonPopup4, setButtonPopup4]=useState (false);
  const[buttonPopup5, setButtonPopup5]=useState (false);
  const[buttonPopup6, setButtonPopup6]=useState (false);
  const[buttonl, buttonload]=useState (false);


  

  return (
    <div className="App5">
      <div className="dashcontainer">
              <table>
                <tr>
                    <td className="td">
                    <button className="button1">Dashboard</button>
                    </td>
                    <td className="td">
                    <button className="button1">My Perspectives</button>
                    </td>
                    <td className="td">
                    <button className="button1">Company Perspectives</button>
                    </td>
                    <td className="td">
                    <button className="button1">My Team</button>
                    </td>
                    <td className="td">
                    <button className="button1">My Organization</button>
                    </td>
                    <td className="td">
                    <button className="button1">Import/Export</button>
                    </td>
                </tr>
              </table>
              <br/>
              <div >
              <select style={dropdown}>
                  <option>SELECT LEVEL</option>
              </select>
              <br/>   
              <br/>  
              <br/>   
               <div style={div}>
                 <button onClick={()=> {
                   setButtonPopup(true)
                   setButtonPopup1(true)
                   
                }}style={button2}>My Dashboard</button>
                 
                
                 <button onClick={()=> {
                   setButtonPopup(true)
                   setButtonPopup1(true)
                   setButtonPopup5(true)
                   
                  
                }}style={button2}>Team Dashboard</button>
                    
               
                 <button onClick={()=> {
                  
                   setButtonPopup2(true)
                   setButtonPopup4(true)
                   setButtonPopup6(true)
                  
                }}style={button2}>Org Dashboard</button>
                </div>  

               <br/> <br/>
               <table className="table" style={{marginLeft:"140px"}} >
                  <tr>
                      <td >
                        <Popup  trigger={buttonPopup}  setTrigger={setButtonPopup}>
                          <h1 style={td}>  <>
                            <div className='header'>
                              <h4 className='title'>Doughnut Chart</h4>
                            </div>
                            <Doughnut data={datadoughnut}/>
                          </> </h1>
                        </Popup>
                      </td>
                      <td >
                      <Popup1  trigger1={buttonPopup1} setTrigger1={setButtonPopup1}>
                        <h1 style={td}> <>
                          <div className='header'>
                            <h4 className='title'>Multi Axis Line Chart</h4>
                          </div>
                          <Line data={dataaxis} options={options} />
                        </>
                        </h1>
                      </Popup1>
                      </td>
                      <td >
                        <Popup5   trigger5={buttonPopup5} setTrigger5={setButtonPopup5}>
                          <h1 style={td}> <>
                            <div className='header'>
                              <h4 className='title'>Bubble Chart</h4>
                            </div>
                            <Bubble data={databubble} />
                          </>
                          </h1>
                        </Popup5>
                        </td>
                   </tr>
                    <tr>
                    <td >
                        <Popup2  trigger2={buttonPopup2} setTrigger2={setButtonPopup2}>
                          <h1 style={td}> <>
                              <div className='header'>
                                <h4 className='title'>Grouped Bar Chart</h4>
                              </div>
                              <Bar data={datagrouped} options={options} />
                            </></h1>
                        </Popup2>
                      </td>
                      <td >
                        <Popup3   trigger3={buttonPopup3} setTrigger3={setButtonPopup3}>
                          <h1 style={td}>
                          <>
                            <div className='header'>
                              <h4 className='title'>MultiType Chart</h4>
                            </div>
                            <Bar data={datamulti} />
                          </>
                          </h1>
                        </Popup3>
                      </td>
                      <td >
                        <Popup4   trigger4={buttonPopup4} setTrigger4={setButtonPopup4}>
                          <h1 style={td}>
                          <>
                            <div className='header'>
                              <h4 className='title'>Radar Chart</h4>
                            </div>
                            <Radar data={dataradar} />
                          </>
                          </h1>
                        </Popup4>
                        </td>
                        <td >
                        <Popup6   trigger6={buttonPopup6} setTrigger6={setButtonPopup6}>
                          <h1 style={td}>
                          <>
                            <div className='header'>
                              <h4 className='title'>Polar Area Chart</h4>
                            </div>
                            <PolarArea data={datapolararea} />
                          </>
                          </h1>
                        </Popup6>
                        </td>
                        
                    </tr>
               </table>
               </div>
              
                
      </div>
    </div>
  );
}