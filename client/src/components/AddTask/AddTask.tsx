import React, { useContext } from "react";
import * as S from "./styles";
import Add from "../../images/add.svg";

const AddTask = () => {
    function handleClick(){
        //setShowAdd(true);
    };

    return(
        <S.Container onClick={handleClick}>
            <S.Icon src={Add}/>
            <S.Text>Add a task</S.Text>
        </S.Container> 
    );
}

export default AddTask