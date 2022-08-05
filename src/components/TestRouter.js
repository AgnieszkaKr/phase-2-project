import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch,
    useParams
} from "react-router-dom";
import UserEvents from "./UserEvents";
import AvaliableEvents from "./AvaliableEvents";

const TestRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path='/myevents' element={< UserEvents />} />
                <Route path='/events' element={< AvaliableEvents />} />
            </Switch>
        </Router>
    )
}

export default TestRouter