import { db } from "../pages/firebase";
import { useState } from 'react';
import "../styles.css";
  
const Read = () => {
  
    const [info , setInfo] = useState([]);
  
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
      });
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("Hierachy").get().then((querySnapshot) => {
             
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);
                  
            });
        })
    }
      
    // Display the result on the page
    return (
        <div>
            <p></p>
            <p></p>
            <center>
            <h2>Hierachy Details</h2>
            </center>
           
        {
            info.map((data) => (
            <Frame Company={data.Company} 
                   Sector={data.Sector}
                   Department={data.Department} 
                   SubDepartment={data.SubDepartment}/>
            ))
        }
        </div>
  
    );
}
  
// Define how each display entry will be structured
const Frame = ({Company , Sector , Department, SubDepartment}) => {
    console.log(Company + " " + Sector + " " + Department+ " " +SubDepartment);
    return (
        
<center>
            
<p></p><p></p>
<div className="rcorners2">
                  
<p>Company : {Company}</p>
                                      
<p>Department : {Department}</p>

<p>Sub Department : {SubDepartment}</p>

<p>Sector : {Sector}</p>

</div>
<p></p>
</center>
        
    );
}
  
export default Read;