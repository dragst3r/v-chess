import "./App.css";
import { Route, Switch } from "react-router-dom";
import GamePage from "./pages/game.page";
import HomePage from "./pages/home.page";
import UserContextProvider from "./utility/user-context";
import "./transitions/transitions.scss";

type Props = {
  props: any;
};
function App() {
  return (
    <div>
      <UserContextProvider>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/room/:id" component={GamePage}></Route>
        </Switch>
      </UserContextProvider>
    </div>
  );
}

export default App;
