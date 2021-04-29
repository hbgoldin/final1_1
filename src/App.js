import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./components/pages/nav";
import Cart from "./components/pages/cart";
import Store from "./components/pages/store";
import Admin from "./components/pages/admin";



function App() {
  return (
      <Router>
        <div className="App">
          <Nav/>
          {/*<Store/>*/}
          <Switch>
            <Route exact path={"/"} component={Store}/>
            <Route exact path={"/cart"} component={Cart}/>
            <Route exact path={"/admin"} component={Admin}/>
          </Switch>
        </div>
      </Router>


  );
}

export default App;
