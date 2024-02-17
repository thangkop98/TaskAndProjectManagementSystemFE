import LoginForm from "../components/form/loginForm"
import SignUpForm from "../components/form/signUpForm"
import Home from "../pages/admin"

// Routes không cần login
export const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: 'login',
        component: LoginForm
    },
    {
        path: 'sign-up',
        component: SignUpForm
    }
]

// Routes cần login
export const privateRoutes = [

]