import React, { useState } from "react";
import * as S from "./styles";
import Select from "react-select";

const AddModal = () => {
  //const{ addTask } = useContext(TaskListContext) as TaskListType;
  //const{categList} = useContext(CategoriesContext) as CategorieContextType;
  //const{ setShowAdd,} = useContext(AddContext) as AddType;

  const [todoName, setTodoName] = useState("");
  //const [taskCat, setTaskCat] = useState(categList.findIndex((cat)=>cat.name == "None"));

  function handleTyping(event: React.ChangeEvent<HTMLInputElement>) {
    //setTaskName(event.target.value);
  }

  function handleCancel() {
    //setShowAdd(false);
  }

  function handleAdd() {}

  var e = document.getElementById("select") as HTMLSelectElement;

  function handleChange() {
    //setTaskCat(Number(e.options[(e.selectedIndex)].value));
  }

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <S.Background>
      <S.Container>
        <S.Text>Insert name</S.Text>
        <S.TitleInput
          placeholder="Task name"
          onChange={handleTyping}
          value={todoName}
        />
        <S.Text>Select a categorie</S.Text>
        {/* <S.Select id="select" onChange={handleChange}>
                    {categList.map((cat)=><option value={cat.id}>{cat.name}</option>)}
                </S.Select> */}
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={options[0]}
          isDisabled={false}
          isClearable={false}
          isSearchable={false}
          name="color"
          options={options}
        />
        <S.Buttons>
          <S.CancelButton onClick={handleCancel}>Cancel</S.CancelButton>
          <S.DeletButton onClick={handleAdd}>Add</S.DeletButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
};

export default AddModal;
