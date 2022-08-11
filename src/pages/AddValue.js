import "../styles.css";
export default function App() {
  return (

    <div className="addValueBack">
   <div className="EmptyDiv"> </div>
      <div className="addValueCenterDiv">
        
         <div className="AddValueHead">
            <text > Add New Value </text>
          </div>

          <div className="TaskHeader">
            <text > Increase Sales</text>
          </div>

          <div className="middleDiv">
            
          <div className="TaskDes">
            <text >Increase Percentage of Sales Made with New Products/Product Features.</text>
          </div>

          <div className="VerticleLine"> </div>
          
          <div className="InputDiv">
          
                <input
                  className="valueInput"
                  placeholder="Enter Value"
                  type="text"
                  name="Address"
                />
            
          </div>
          

          </div>

          <div className="addValueSaveButton">
            <button  className="saveButton" onclick="#" type="submit" value="SUBMIT"> SAVE CHANGES </button>
          </div>
       
      </div>

    </div>

  );
}
