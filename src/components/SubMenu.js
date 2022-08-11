import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles.css";


const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    background-color:rgba(101, 147, 245, 0.384);
    color:white;
    border-left: 4px solid #ffffff;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  
`;

const DropdownLink = styled(Link)`

  height: 45px;
  padding-left: 4rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 15px;

  &:hover {
   
    color:#6593F5;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div className="data">
         
          <div>{item.icon}</div> 
        <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
