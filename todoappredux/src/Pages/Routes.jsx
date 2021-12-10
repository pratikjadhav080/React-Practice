import { Switch, Route, Link } from 'react-router-dom'
import { Edit } from './Edit'
import { Home } from './Home'
import { IndividualPost } from './IndividualTodo'
import { LoginPage } from './LoginPage'
import { TodoPage } from './TodoPage'

export const Allroutes = () => {
    return <Switch>

        <Route exact path="/">
            <Home/>
        </Route>

        <Route exact path="/login">
            <LoginPage/>
        </Route>

        <Route exact path="/todo">
            <TodoPage/>
        </Route>

        <Route exact path="/todo/:id">
            <IndividualPost/>
        </Route>

        <Route path="/todo/edit/:id">
            <Edit/>
        </Route>

        <Route>
            <h1>404, Route Does not exist</h1>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </Route>

    </Switch>
}