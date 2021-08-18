
import Todolist from "./components/Todolist";
import Home from "./components/Home";
import MyListas from "./components/MyListas";
import SeeDetails from "./components/SeeDetails";
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route path='/SeeDetails/:id'>
            <SeeDetails />
          </Route>
          <Route path='/listas'>
            <MyListas />
          </Route>
          <Route path='/todo'>
            <Todolist />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
