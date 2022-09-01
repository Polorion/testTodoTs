import * as React from "react";
import GeneratorRandomString from "../../../../utils/GeneratorRandomString.tsx";
import MyButton from "../../../UI/MyButton/MyButton.tsx";
import * as events from "events";

interface IForm {
  addTodo: (todo: { title: string; isDone: boolean; id: string }) => {};
  APIInput: { valueInput: string; setValueInput: (value: string) => {} };
}

const Form = (props: IForm) => {
  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.APIInput.setValueInput(e.target.value);
  }; // меняю состояние инпута делаю его управляемым
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); //убираю отправку формы чтобы небыло перезагрузки страницы
    props.addTodo({
      title: props.APIInput.valueInput,
      isDone: false,
      id: GeneratorRandomString(),
    }); //отпраляю новое дело в стейт
    props.APIInput.setValueInput(""); // очищаю форму
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onInput={onInput}
          value={props.APIInput.valueInput}
          type="text"
          placeholder={"введите дело"}
        />
        <MyButton disabled={!props.APIInput.valueInput}>создать дело</MyButton>
        {/*проверка наличия значения в инпуте*/}
      </form>
    </div>
  );
};

export default Form;

// форма для создания дела
