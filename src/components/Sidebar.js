import React, { useState } from "react";
import "../styles.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import image from "./assets/user.png"
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import { db } from "../pages/firebase";

const Nav = styled.div`
  background: #F8F8F8;
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 10;
`;

const SidebarNav = styled.nav`
  background: #19356f;
  width: 270px;
  height: 100vh;
  display: flex;
  flex-direction:column;
  padding-top:40px;
  position: fixed;
  top: 0;
  transition: 500ms;
  z-index: 10;
`;

const SerachIcon ={
marginLeft:"-40px",
color:"#19356F",
}

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [arr, setArr] = useState([]);
  const [usersDe, setusersDe] = React.useState([]);
React.useEffect(() => {
  db.collection("users")
    .get()
    .then((querySnapshot) => {
      let temp=[];
      querySnapshot.docs.map((doc) =>
    {
     
      let data = doc.data();
      console.log(data.name);
         
    } 
    
      );
      setArr(temp);
      setusersDe(arr);
    });
}, [db]);




  return (
    <>
      <IconContext.Provider value={{ color: '#6593f5' }}>
        <Nav>
         <div>
          <input placeholder="Search Here..." className="inputfiled"></input>
          <icon style={SerachIcon}> < SearchIcon /> </icon>,
        </div>
          <div className="notSetting">
            <div className="Icon1">
              <NotificationsNoneRoundedIcon />
            </div>
            <div className="Notifdiv">
                2
              </div>

            <div className="Icon2">
              <TuneRoundedIcon />
            </div>

           <a href="/Login"> <div className="Icon2"> 
              <PersonIcon />
            </div>
            </a>

          </div>

        </Nav>

        <SidebarNav sidebar={sidebar} >
         
            <div className="CompName"> Cooperate Performance </div>
            <div className="profileImgSector">
              <div className="ProfimgDiv">
                <img className="img" src={image} alt="logo" />
              </div>
            </div>

            <div className="profileDesSector">
              <text className="Post"> DEPARTMENT HEAD</text>
               <text className="Name"> coop perf</text>
            </div>
            <div className="SidebarList">
              {SidebarData.map((item, index) => {
                return (
                  <SubMenu
                    item={item}
                    key={index}
                    id={window.location.pathname == item.path ? "active" : ""}
                    className="row"

                    onClick={() => {
                      window.location.pathname = item.path;
                    }}
               
                  />
                );
              })}
            </div>
          
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
export default Sidebar;
