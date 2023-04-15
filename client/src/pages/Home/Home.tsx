import React, { useState } from 'react'
import * as S from "./styles";
import SidebarItem from '../../components/SidebarItem/SidebarItem';
import ExpandSidebarItem from '../../components/ExpandSidebarItem/ExpandSidebarItem';
import TaskFill from '../../images/taskFill.png';
import Settings from "../../images/settings.svg";
import Folder from "../../images/folder.svg";
import Logout from "../../images/logout.svg"
import Filter from "../../images/filter.svg";


import Logo from "../../images/Logo.png"
import { Link } from 'react-router-dom';
import FilterTag from '../../components/FilterTag/FilterTag';
const Home = () => {

  const [allActive, setAllActive] = useState(true);
    const [doneActive, setDoneActive] = useState(false);
    const [notDoneActive, setNotDoneActive] = useState(false);
    const [listToDisplay, setListToDisplay] = useState(0);
    

    function handleAll(){
      setListToDisplay(0);
      setAllActive(true);
      setDoneActive(false);
      setNotDoneActive(false);
  };

  function handleDone(){
      setListToDisplay(1);
      setAllActive(false);
      setDoneActive(true);
      setNotDoneActive(false);
  };
  function handleNotDone(){
      setListToDisplay(2);
      setAllActive(false);
      setDoneActive(false);
      setNotDoneActive(true);
  };
  return(
        
        <S.Page>
            <S.Sidebar>
                <S.Img src={Logo}/>
                <S.Tabs>
                    <SidebarItem icon={TaskFill} name="Tasks" isActive={true} ></SidebarItem>
                    <ExpandSidebarItem icon={Folder} name="Categories"  ></ExpandSidebarItem>
                    <SidebarItem icon={Settings} name="Settings" isActive={false} ></SidebarItem>
                </S.Tabs>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <SidebarItem icon={Logout}name="Logout" isActive={false}></SidebarItem>
                </Link>
    
            </S.Sidebar>
            <S.Main>
                <S.Header>All your tasks</S.Header>
                <S.TitleAndFilter>
                    <S.Title onClick={handleDone}>Tasks </S.Title>
                    <S.FilterField>
                        <div onClick={handleAll}><FilterTag name="All" active={allActive}/></div>
                        <div onClick={handleDone}><FilterTag name="Done" active={doneActive}/></div>
                        <div onClick={handleNotDone}><FilterTag name="Not done" active={notDoneActive}/></div>
                        <S.FilterIcon src={Filter}/>
                    </S.FilterField>
                </S.TitleAndFilter>
                {/* {listOfLists[listToDisplay].map(task =><TaskCard id={task.id} name={task.title} list={task.categorie} color={task.color} done={task.done}/>)}
                <AddTask></AddTask> */}
            </S.Main>
            
        </S.Page>
        
        
    );
}

export default Home