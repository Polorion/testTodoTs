import * as React from "react";
import S from "./TodoBody.module.css";

import Form from "./Form/Form.tsx";
import ListTodo from "./ListTodo/ListTodo.tsx";
import { Outlet } from "react-router-dom";

interface ITodoBody {
  addTodo: (todo: { title: string; isDone: boolean; id: string }) => {};
  todo: [{ title: string; isDone: boolean }];
  setIsDone: (id: string) => {};
  deleteTask: (id: string) => {};
  setRenameInput: (id: string, text: string) => {};
  APIInput: { valueInput: string; setValueInput: (value: string) => {} };
}

const TodoBody = (props: ITodoBody) => {
  return (
    <div>
      <Outlet />
      <div className={S.body}>
        <Form addTodo={props.addTodo} APIInput={props.APIInput} />
        <ListTodo
          todo={props.todo}
          setIsDone={props.setIsDone}
          setRenameInput={props.setRenameInput}
          deleteTask={props.deleteTask}
        />
      </div>
    </div>
  );
};

export default TodoBody;
