import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import GamePage from "./pages/game.page";

import HomePage from "./pages/home.page";
import UserContextProvider from "./utility/user-context";
import { useAuth } from "./utility/hooks/use-auth";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/room/:id">
            <GamePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
