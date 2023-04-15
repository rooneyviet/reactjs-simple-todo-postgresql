
import React, {useState} from "react";
import * as S from "./styles"
import CategorieItem from "../CategoryItem/CategoryItem";

import Arrow from "../../images/arrow.svg"
import Add from "../../images/add.svg";

interface SidebarItemProps{
  name: string;
  icon: string;
}

const ExpandSidebarItem = ({name, icon}: SidebarItemProps) => {
  const [active, setActive] = useState(false);

  function handleActivate(){
    setActive(!active);
}

  return(
    <S.OuterContainer isActive={active}>
        <S.Container isActive={active} onClick={handleActivate}>
            <S.Icon src={icon}/>
            <S.Name>{name}</S.Name>
            <S.Arrow isActive={active} src={Arrow}/>
        </S.Container>
        <S.CatArea isActive={active}>
            {/* {categList.map(cat=><CategorieItem name={cat.name} color={cat.color} />)} */}
            <S.AddArea>
                <S.AddIcon src={Add}/>
                <S.AddText>Add new</S.AddText>
            </S.AddArea>
        </S.CatArea>

    </S.OuterContainer>
);
}

export default ExpandSidebarItem