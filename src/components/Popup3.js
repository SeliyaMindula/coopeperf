/*import { faClosedCaptioning, faWindowClose } from "@fortawesome/fontawesome-free-regular";
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

export default function Popup3(props3){
  return  (props3.trigger3) ? (
<div style={popup}>
  <button style={btn} onClick={()=> props3.setTrigger3(false)}> 
  <FontAwesomeIcon className="icon" icon={faWindowClose}/>
  </button>
  {props3.children}

</div>
  ): "";
  
}*/

import { faClosedCaptioning, faWindowClose } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bar } from 'react-chartjs-2';
import React from "react";
//import Barchart from './Barchart'
import "../styles.css";
import "react-circular-progressbar/dist/styles.css";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale,registerables } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale,...registerables);



const btn=
{
  position:"absolute",
  marginLeft:"380px",
  marginBottum:"100px",
  border:"none",
  backgroundColor:"white",
  
}

const popup={
  backgroundColor:"#f8f8f8",//blue
  width:"450px",
  height:"350px",
  padding:"20px",
  
}
const container={
  width: '400px', 
  height:"300px" ,
  backgroundColor:"#ffffff",
  borderRadius: '8px'
}

export default function Popup3(props3){
  return  (props3.trigger3) ? (
<div style={popup}>
  <button style={btn} onClick={()=> props3.setTrigger3(false)}> 
  <FontAwesomeIcon className="icon" icon={faWindowClose}/>
      </button>
      <div style={container}>
         
      <Bar
                data={{
                    labels:['0%', '1%-25%', '25% - 50%', '50%-75%', '75%-99%', '100%'],
                    datasets:[{
                        label: 'Goal Achievement',
            data: [12, 25, 19, 15, 5, 8],
            backgroundColor: 'rgba(52, 146, 235)',
            borderWidth: 1
                    }]
                }}
                height={300}
                width={320}
                
                options={{maintainAspectRatio:false}}
                

                />  
                <h4 style={{textAlign:"center",marginTop:'5px',}}>Goal Achievement</h4> 
              
         




</div>

</div>
  ): "";
  
}