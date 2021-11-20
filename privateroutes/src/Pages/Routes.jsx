import { Switch, Route, Link } from 'react-router-dom'
import { PrivateRoute } from '../components/PrivateRoutes'
import { Dashboard } from './Dashboard'
import { Home } from "./Home"
import { Login } from "./Login"
import { Settings } from './Settings'

export const Allroutes = () => {
    return <Switch>

        <Route exact path="/">
            <Home />
        </Route>

        <Route path="/login">
            <Login/>
        </Route>

        <PrivateRoute path="/dashboard">
            <Dashboard/>
        </PrivateRoute>

        <PrivateRoute path="/dashboard/settings">
            <Settings/>
        </PrivateRoute>

        <Route>
            <h1>404, Route Does not exist</h1>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </Route>
    </Switch>
}