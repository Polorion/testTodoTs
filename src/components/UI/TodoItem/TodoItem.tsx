import * as React from "react";
import MyButton from "../MyButton/MyButton.tsx";
import { useNavigate } from "react-router-dom";
import S from "./TodoItem.module.css";

interface ITodoItem {
  title: string;
  isDone: boolean;
  id: string;
  setIsDone: (id: string) => {};
  setRenameInput: (id: string, text: string) => {};
  deleteTask: (id: string) => {};
}

const TodoItem = (props: ITodoItem) => {
  const history = useNavigate();
  const handlerDone = () => {
    props.setIsDone(props.id);
  };
  const handlerRename = () => {
    props.setRenameInput(props.title, props.id);
    history(`edit/${props.id}`);
  };
  const handlerDelete = () => {
    props.deleteTask(props.id);
  };

  return (
    <li className={`${S.item} ${props.isDone && S.done}`}>
      <div className={S.title}>{props.title}</div>
      <div>
        <MyButton onClick={handlerDone}>
          {props.isDone ? "сделано" : "не сделано"}
        </MyButton>
        <MyButton onClick={handlerRename}>Редакстирова</MyButton>
        <MyButton onClick={handlerDelete}>удалить</MyButton>
      </div>
    </li>
  );
};

export default TodoItem;
