import { Switch, Route, Link } from 'react-router-dom'
import { DashboardPage } from './DashboardPage'
import { LoginPage } from './LoginPage'
import { RegistrationPage } from './RegistrationPage'


export const Allroutes = () => {
    return <Switch>

        <Route exact path="/">
            <RegistrationPage/>
        </Route>

        <Route exact path="/login">
            <LoginPage/>
        </Route>

        <Route exact path="/dashboard">
            <DashboardPage/>
        </Route>

        <Route>
            <h1>404, Route Does not exist</h1>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </Route>

    </Switch>
}