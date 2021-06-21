import "./App.css";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Items from "./components/Items.js";
import Login from "./components/Login.js";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import SignUp from "./components/SignUp";
import ItemShow from "./components/ItemShow.js";
import CurrentOrder from "./components/CurrentOrder";

function App() {
  //get items logic
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/items", {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    })
      .then((res) => res.json())
      .then((text) => {
        if (!localStorage.token) {
          return null;
        }
        setItems(text);
      });
  }, []);

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/login">
          <Login setItems={setItems} />
        </Route>
        <Route exact path="/items">
          <Items items={items} />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/items/:id">
          <ItemShow items={items} />
        </Route>
        <Route exact path="/mycart">
          <CurrentOrder />
        </Route>
      </Switch>
    </>
  );
}

export default App;
