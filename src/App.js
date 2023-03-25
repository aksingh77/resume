import { useRoutes } from "react-router-dom";
import "./App.css";
import pageRoute from "./router/Router";

function App() {
  let route = useRoutes([...pageRoute]);
  return route;
}

export default App;
