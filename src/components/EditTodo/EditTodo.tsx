import * as React from "react";
import ReactDOM from "react-dom";
import MyButton from "../UI/MyButton/MyButton.tsx";
import S from "./EditTodo.module.css";
import useGoToHome from "../../hooks/useGoToHome.tsx";
import { ReactElement } from "react";

interface IEditTodo {
  value: string;
  APIInputRename: {
    valueInputRename: string;
    setValueInputRename: (value: string) => {};
  };
  renameTodo: () => {};
}

const EditTodo = (props: IEditTodo) => {
  const node = document.querySelector("#editTodo"); //нащел куда будет ссылаться портал
  const exit = useGoToHome(); //нук который вернет URL домашний адрес
  const handler = (e: React.ChangeEvent<HTMLDivElement>) => {
    e.stopPropagation(); // чтобы погружение события остановилось и модалка зкрылась
  };
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); //функция чтобы не презагружалась страница
    props.renameTodo(); //меняю название тодо
    exit(); // заакрываю окно редактирования
  };
  const setInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.APIInputRename.setValueInputRename(e.target.value); // устанавливаю значение  в инпуте делая его контролируемым
  };

  if (!node) {
    return null;
  } // проверяю существует ли элемент куда я хочу напрравить портал
  return ReactDOM.createPortal(
    <div className={S.body} onClick={exit}>
      <div onClick={handler}>
        <form onSubmit={onSubmit}>
          <input
            onInput={setInput}
            value={props.APIInputRename.valueInputRename}
            type="text"
          />
          <MyButton disabled={!props.APIInputRename.valueInputRename}>
            Созранить изменения
          </MyButton>
        </form>
      </div>
    </div>,
    node
  ); //создал портал  чтобы окно было в корне проекта и мог на него повесить стили и растянуть на все окно браузера
};

export default EditTodo;
