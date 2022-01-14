import Header from './components/sharedPage/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
