import "./App.css";
import { Route, BrowserRouter , Switch } from "react-router-dom";
import GamePage from "./pages/game.page";

import HomePage from "./pages/home.page";

function App() {
  //Socket()
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/game">
          <GamePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
