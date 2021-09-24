import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return ( 
        <Router >
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch> 
        </Router>
    );
}

export default App;