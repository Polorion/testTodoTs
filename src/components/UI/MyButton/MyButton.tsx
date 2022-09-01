import S from "./MyButton.module.css";
import React, { ReactNode } from "react";

interface IMyButton {
  children?: ReactNode;
}
const MyButton = ({ children, ...props }: IMyButton) => {
  return (
    <button className={S.button} {...props}>
      {children}
    </button>
  );
};
//
// создал кнопку и в все атрибуты будут в пропсах передаваться а текст будет как дочерний элемент

export default MyButton;
