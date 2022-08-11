import React, { Component,useState, setState } from 'react';
import PropTypes from "prop-types";
import "../my-node.css";
import "../styles.css";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons/lib";
import image from "../components/assets/user.png"

//////////////////////////////

const DropDownContainerNew = styled("div")`
  width: 200px;
  margin: 0 auto;
 
`;

const DropDownContainerEdit = styled("div")`
  width: 200px;
  margin: 0 auto;
 
`;

const DropDownHeaderNew = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
  background: #6593F5;
  border-radius:5px;
`;

const DropDownHeaderEdit = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 15px;
  color: #6593F5;
  background: #ffffff;
  border-radius:5px;
  border-color: #6593f5;
  border-width: 2px;
  border-style: solid;

`;

const DropDownListContainerNew = styled("div")``;
const DropDownListContainerEdit = styled("div")``;

const DropDownListNew = styled("ul")`
  padding:0;
  margin-bottom: 40px;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #646464;
  font-size: 0px;
  font-weight: 400;
  &:first-child {
    padding-top: 0.8em;
  }
  border-radius:5px;
`;

const DropDownListEdit = styled("ul")`
 padding:0;
  margin-bottom: 40px;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #646464;
  font-size: 0px;
  font-weight: 400;
  &:first-child {
    padding-top: 0.8em;
  }
  border-radius:5px;
`;

const ListItemNew = styled("li")`
  list-style: none;
  padding:6px;
  margin-bottom:5px;
  font-size: 15px;
`;

const ListItemEdit = styled("li")`
  list-style: none;
  padding:6px;
  margin-bottom:5px;
  font-size: 15px;
`;
//////////////////////////////////

const propTypes = {
  nodeData: PropTypes.object.isRequired
};



const MyNode = ({ nodeData }) => {
/////////////////////////
  const [isOpenNew, setIsOpenNew] = useState(false);
  const togglingNew = () => setIsOpenNew(!isOpenNew);

  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const togglingEdit = () => setIsOpenEdit(!isOpenEdit);

////////////////////////////////


 const [show,setShow] =useState(false);
 
 const CompClose = () => setShow(false);
 const CompShow = () => setShow(true);


 const data = require("../data/data.json");
 const StrName = require("../data/data.json");

  return (
     <div>
        <button className="Nodediv" onClick={ CompShow }>
          <div>
          <div className="img"> <img className="nodeimage" src={image} /></div>
            <div className="fullname">{nodeData.title} <br/> {nodeData.name} </div>
          </div> 
        </button>


      <Modal className="" show={ show } onHide={ CompClose }>
      
        <Modal.Body className="Model">
           <div> 
              <button className="closeButton" onClick={CompClose}>x</button>
           </div>

           <div className="popupDivHead">
           <div className="img"> <img className="image" src={image} /></div>
            <div className="fullname">{nodeData.name} <br/> {nodeData.title} </div>
           </div>

            <div className="modelBody"> 

            <DropDownContainerNew>
              <DropDownHeaderNew onClick={togglingNew}>ADD NEW</DropDownHeaderNew>
              {isOpenNew && (
                <DropDownListContainerNew>
                  <DropDownListNew className="DropDownListNew">
                    <a style={{ textDecoration: 'none', color:'gray' }} href="/AddValue"> <ListItemNew>Perspective</ListItemNew></a>   
                    <a style={{ textDecoration: 'none', color:'gray' }} href="/AddValue"> <ListItemNew>Goal</ListItemNew></a>   
                    <a style={{ textDecoration: 'none', color:'gray' }} href="/AddValue"> <ListItemNew>Strategy</ListItemNew></a>   
                    <a style={{ textDecoration: 'none', color:'gray' }} href="/AddValue"> <ListItemNew>Action Plan</ListItemNew></a>   
                    <a style={{ textDecoration: 'none', color:'gray' }} href="/AddValue"> <ListItemNew>Task</ListItemNew></a>   
               
                     </DropDownListNew>
              </DropDownListContainerNew>
              )}
            </DropDownContainerNew>
            
            <DropDownContainerEdit>
              <DropDownHeaderEdit onClick={togglingEdit}>EDIT</DropDownHeaderEdit>
              {isOpenEdit && (
                <DropDownListContainerEdit >
                  <DropDownListNew className="DropDownListNew">
                   
                    
                    {data.Goals.map(item => (
                      <ListItemEdit key = {item.id} value ={item.GoalName}> <a style={{ textDecoration: 'none', color:'Black' }} href="/EditValue"> {item.GoalName}</a> </ListItemEdit> 
                    ))} 

                    {data.Strategy.map(item => (
                      <ListItemEdit key = {item.id} value ={item.StrName}> <a style={{ textDecoration: 'none', color:'Black' }} href="/EditValue"> {item.StrName}</a> </ListItemEdit> 
                    ))} 




                  </DropDownListNew>
              </DropDownListContainerEdit>
              )}
            </DropDownContainerEdit>


            </div>
        </Modal.Body>
        
      </Modal>

    </div>
       
  );
};


MyNode.propTypes = propTypes;

export default MyNode;
