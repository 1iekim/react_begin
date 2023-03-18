import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MuInput";
import { AuthContext } from "../context";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();

        setIsAuth(!isAuth);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>
            <h1>Войдите или зарегистрируйтесь</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder="Логин"/>
                <MyInput type='password' placeholder="Пароль"/>
                <MyButton >Войти</MyButton>
            </form>
        </div>
    )
}

export default Login;