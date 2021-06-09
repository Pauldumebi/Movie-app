import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return ( 
        <Router >
            <Switch>
                <Route exact path = "/register" component = { Register }/> 
                <Route exact path = "/login" component = { Login }/> 
                <Route exact path="/movie-app" component={Home} />
                {/* <Route exact path = "/" component = { Home }/>  */}
            </Switch> 
        </Router>
    );
}

export default App;