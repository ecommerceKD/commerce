import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'

import Home from "../views/home"
import Profile from "../views/profile"

import { UserProvider } from '../context/UserContext'

export default function Router() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />,
                    <Route path="/profile" component={Profile} exact />,

                    <Route path="*" component={Home} />
                </Switch>
            </BrowserRouter>
        </UserProvider>
    )
}