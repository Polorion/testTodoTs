import { useNavigate } from "react-router-dom";
const useGoToHome = () => {
  const history = useNavigate();
  const exit = () => {
    history("/");
  };
  return exit;
};
export default useGoToHome;
