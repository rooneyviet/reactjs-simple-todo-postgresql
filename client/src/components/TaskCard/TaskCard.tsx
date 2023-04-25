import React from 'react'
import * as S from "./styles";
import Edit from "../../images/edit.svg";
import Erase from "../../images/erase.svg";
import { ITodo } from '../../model/ITodo';
import todoAPI from '../../api/service/todo.api';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodoItem } from '../../redux/todoSlice';

interface TaskCardProps{
    id:string;
    title: string;
    content: string,
    categoryName: string;
    categoryColor: string;
    categoryId?: string,
    isDone: boolean;
};


const TaskCard = ({id, title, content, isDone, categoryId, categoryName, categoryColor}: TaskCardProps) => {
    const dispatch = useDispatch();


    
    const getTodos = async () => {
        try {
          const {response, err} = await todoAPI.getAllTodos();
          if(err) {
            console.log(err);
          }
    
          if(response) {
            //dispatch(setTodos(response.data))
            console.log(response);
          }
            
        
          //setTodos(newTempList);
        } catch (err) {
          console.log("error fetching todos " + err);
        }
      };


    const handleCheck = async (isDone: boolean) => {
        //const newIsDone = !isDone;
        try {
          const {response, err} = await todoAPI.updateTodo({todoId: id, isDone: isDone});
          if(err) {
            
            console.log(err);
          }
    
          if(response) {
            console.log("handleCheckBox:");
            dispatch(updateTodoItem(response.data))
            console.log(response.data);
          }
            
        
          //setTodos(newTempList);
        } catch (err) {
          console.log("error fetching todos " + err);
        }
      };

      const handleDelete = async () => {
        try {
            const {response, err} = await todoAPI.deleteTodo({todoId: id});

            if(response){
                console.log(response);
                dispatch(removeTodo(id))
            }

            if(err){
                console.log(err);
            }
        } catch (error) {
            console.log("error fetching todos " + error);
        }
    }


  return (
    <S.Container>
            <S.CheckField>
                <S.CheckboxRing onClick={()=> handleCheck(!isDone)}><S.CheckFill done={isDone}/></S.CheckboxRing>
            </S.CheckField>
            <S.Description>
                <S.Name done={isDone}>{title}</S.Name>
                <S.ListBelong>
                    <S.ColorTag color={categoryColor}/>
                    <S.ListName>{categoryName}</S.ListName>
                </S.ListBelong>
            </S.Description>
            
            <S.Icon src={Edit}/><S.Icon src={Erase} onClick={handleDelete}/>
        </S.Container>
  )
}

export default TaskCard