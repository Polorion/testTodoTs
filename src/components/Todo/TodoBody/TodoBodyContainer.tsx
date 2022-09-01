import * as React from "react";
import TodoBody from "./TodoBody.tsx";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import EditTodo from "../../EditTodo/EditTodo.tsx";

interface ITodo {
  title: string;
  id: string;
  isDone: boolean;
}

const TodoBodyContainer = () => {
  const [todo, setTodo] = useState<ITodo[]>([]); //создал состояние всех дел
  const [valueInput, setValueInput] = useState(""); //создание стейта для инпута
  const [valueInputRename, setValueInputRename] = useState(""); //создание стейта для инпута изменяющего имя
  const [renameInputId, setRenameInputId] = useState(""); //создал стейт чтобы найти редактируемый инпут по ID
  const APIInput = { valueInput, setValueInput }; //объект для взаимодействи я с инпутом
  const APIInputRename = { valueInputRename, setValueInputRename }; //объект для взаимодействи я с инпутом меняющего имя
  const addTodo = (newTodo: []) => {
    setTodo((prev) => prev.concat(newTodo));
  }; //функция для добовления дела в массив дел

  const setIsDone = (id: string) => {
    const newArray = todo.map((el) => {
      if (el.id === id) {
        el.isDone = !el.isDone;
      }
      return el; //ищу в списке дел нужное по id и меняю в нем состояние готовности ивозвращаю новый массив
    });
    setTodo(newArray); // тут я перезатираю старый массив новым с изменными данными
  };

  const setRenameInput = (text: string, id: string) => {
    setValueInputRename(text); // получаю значение нужного тодо и меняю значение инпута в окне редактора
    setRenameInputId(id); // устанавливаю id полученный по клику на тодо для редактирования
  };
  const renameTodo = () => {
    const newArray = todo.map((el) => {
      if (el.id === renameInputId) {
        //создаю новый масив и меняю в нем заголовок
        el.title = valueInputRename;
      }
      return el; //ищу в списке дел нужное по id и меняю в нем состояние готовности ивозвращаю новый массив
    });
    setTodo(newArray); // тут я перезатираю старый массив новым с изменными данными
  };

  const deleteTask = (id: string) => {
    const newArray = todo.filter((el) => {
      return el.id !== id; //возвращаю все элементы в масив если его id не равен id выбронаго при удалении
    });
    setTodo(newArray); // тут я перезатираю старый массив новым с изменными данными
  };

  interface Test {
    id: string;
  }

  return (
    <div>
      <Routes>
        <Route
          path={"/"}
          element={
            <TodoBody
              addTodo={addTodo}
              todo={todo}
              setIsDone={setIsDone}
              setRenameInput={setRenameInput}
              APIInput={APIInput}
              APIInputRename={APIInputRename}
              deleteTask={deleteTask}
            />
          }
        >
          <Route
            path={"edit/:id"}
            element={
              <EditTodo
                APIInputRename={APIInputRename}
                renameTodo={renameTodo}
              />
            }
          />
        </Route>
        <Route path={"/*"} element={<div>404</div>} />
      </Routes>
    </div>
  );
};

export default TodoBodyContainer;
