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


export default function Popup2(props2){
  return  (props2.trigger2) ? (
<div style={popup}>
  <button style={btn} onClick={()=> props2.setTrigger2(false)}> 
  <FontAwesomeIcon className="icon" icon={faWindowClose}/>
  </button>
  {props2.children}

</div>
  ): "";
  
}*/

import { faClosedCaptioning, faWindowClose } from "@fortawesome/fontawesome-free-regular";
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles.css";
import "../styles.css";
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
  marginLeft:"90px"
  
}
/*const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};*/
const container={
  width: '400px', 
  height:"300px" ,
  backgroundColor:"#ffffff",
  borderRadius: '8px'
}

export default function Popup2(props2){
  return  (props2.trigger2) ? (
<div style={popup}>
  <button style={btn} onClick={()=> props2.setTrigger2(false)}> 
    <FontAwesomeIcon className="icon" icon={faWindowClose}/>
  </button>
        
        <div style={container}>
         
          <Line 
          data={{
            labels:['Aug 16','Sep 16','Oct 16','Nov 16','Dec 16','Jan 17','Feb 17'],
            datasets:[{
              label:'Cheack in activity',
              data:[9,18,22,0,0,42,15],
              borderColor:'rgba(24, 184, 85)',
              borderWidth: 3
            }]
          }}
          height={300}
          width={600}
          options={{maintainAspectRatio:false}}
          />
            
            <h4 style={{textAlign:"center",marginTop:'5px',}}>Cheack in activity</h4>
            
            
        </div>
</div>
  ): "";
  
}