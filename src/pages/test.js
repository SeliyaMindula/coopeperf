import "../styles.css";
export default function test() {
    
const data = require("../data/data.json");
const StrName = require("../data/data.json");
  return (

    <div className="App2">
     
     <div className="EmptyDiv"> </div>
     <select className="dropDown2">
        {data.Goals.map(item => (
            <option key = {item.id} value ={item.GoalName}> {item.GoalName}</option>
            
   
       ))} 
          {data.Strategy.map(item => (
            <option key = {item.id} value ={item.StrName}> {item.StrName}</option>
            
   
       ))} 
        
    </select>

    </div>

   
  );
}

/***
 * 
  <DropDownListEdit className="DropDownListEdit">
                    <a style={{ textDecoration: 'none', color:'gray' }} href="/EditValue"> <ListItemEdit>Goal 1</ListItemEdit></a>   
                    <a style={{ textDecoration: 'none', color:'gray' }} href="/EditValue"> <ListItemEdit>Goal 2</ListItemEdit></a>   
                    <a style={{ textDecoration: 'none', color:'gray' }} href="/EditValue"> <ListItemEdit>Perspective 1</ListItemEdit></a>   
                    <a style={{ textDecoration: 'none', color:'gray' }} href="/EditValue"> <ListItemEdit>Perspective 2</ListItemEdit></a>   
                    <a style={{ textDecoration: 'none', color:'gray' }} href="/EditValue"> <ListItemEdit>Strategy 1</ListItemEdit></a>   
                </DropDownListEdit>
 */
