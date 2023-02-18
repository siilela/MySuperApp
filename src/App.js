import Login from "./Components/Login";
import Logout from "./Components/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./style.css"

function App() {
  const user = useSelector(selectUser);

  return <div>{user ? <Logout /> : <Login />}</div>;
}

export default App;
