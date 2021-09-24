import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Home from "../views/home"
import Profile from "../views/profile"

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />,
                <Route path="/profile" component={Profile} exact />,
                
                <Route path="*" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}