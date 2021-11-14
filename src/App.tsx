import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import GamePage from "./pages/game.page";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import HomePage from "./pages/home.page";
import UserContextProvider from "./utility/user-context";
import "./transitions/transitions.scss";
import { useHistory, useLocation } from "react-router-dom";

type Props = {
  props: any;
};
function App() {
  //Specify the duration of the animation (on enter and on exit)
  const timeout = { enter: 800, exit: 400 };
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
