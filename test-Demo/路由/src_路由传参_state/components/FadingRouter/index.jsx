import {Route} from 'react-router-dom'

export const FadingRouter = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props => (
        <Component {...props}/>
    ) } />
)

