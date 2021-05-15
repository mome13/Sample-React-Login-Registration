import './App.css';
import LoginLayout from "./components/loginLayout";
import RegisterLayout from "./components/RegisterLayout";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
  return (
    <div className='main-product'>
        <Router>
            <Switch>
                <Route path="/signup">
                    <RegisterLayout />
                </Route>
                <Route path="/">
                    <LoginLayout />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
