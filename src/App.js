import Header from './components/sharedPage/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route path="/">
            <Header />
          </Route>
          <Route path="/home">
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
