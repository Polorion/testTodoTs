import * as React from "react";
import TodoItem from "../../../UI/TodoItem/TodoItem.tsx";
import GeneratorRandomString from "../../../../utils/GeneratorRandomString.tsx";

interface IListTodo {
  todo: [{ title: string; isDone: boolean; id: string }];
  setIsDone: (id: string) => {};
  deleteTask: (id: string) => {};
  setRenameInput: (id: string, text: string) => {};
}

const ListTodo = (props: IListTodo) => {
  return (
    <ul>
      {props.todo &&
        props.todo.map((el) => {
          //перебераю массив задач и отрисововаю их
          return (
            <TodoItem
              key={GeneratorRandomString()}
              title={el.title}
              isDone={el.isDone}
              id={el.id}
              setIsDone={props.setIsDone}
              setRenameInput={props.setRenameInput}
              deleteTask={props.deleteTask}
            />
          );
        })}
    </ul>
  );
};

export default ListTodo;
