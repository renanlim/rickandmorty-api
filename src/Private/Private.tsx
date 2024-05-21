import { useApp } from "../hooks/useApp";
import { Main } from "../Layout/Main";
import Loginn from "../Layout/ScreenLogin";

const Private = () => {
  const { loggedIn } = useApp();
  return loggedIn ? <Main /> : <Loginn />;
};

export default Private;
