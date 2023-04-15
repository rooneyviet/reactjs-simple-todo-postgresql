import React from 'react'
import * as Style from "./styles"

interface SidebarItemProps{
    name: string;
    icon: string;
    isActive: boolean;
}

const SidebarItem = ({name, icon, isActive}: SidebarItemProps) => {

  return(
    <Style.Container isActive={isActive}>
        <Style.Icon src={icon}/>
        <Style.Name>{name}</Style.Name>
    </Style.Container>
);
}

export default SidebarItem