import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider.js";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HRxtaGvIOY5nar6UxLm0pjCh5JDWbo6pFb2eLvjKObCEANmeLsrbyyqyEBl0mrDGs5HiDTUFiJTG17PYQiZwOLE00eH6oi2iS"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  //LISTENER to the AUTHENTIFICATION
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The USER IS ----------", authUser);

      if (authUser) {
        // if the user is log in stay login

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/payment">
            <Header />

            {/* higher order function */}
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
