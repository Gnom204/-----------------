import React from "react";
import { loginUser } from "../utils/api";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(login, password)
      .then((res) => {
        console.log(res);
        navigate("/table", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col space-y-4 p-10 rounded-lg"
    >
      <h1 className="text-white text-3xl text-center">Авторизация</h1>
      <label className="text-white">
        <p>Логин</p>
        <input
          onChange={(e) => setLogin(e.target.value)}
          className="w-96 rounded-lg p-2 bg-transparent border border-blue-600"
          type="text"
          placeholder="Логин"
        />
      </label>
      <label className="text-white">
        <p>Пароль</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="w-96 rounded-lg p-2 bg-transparent border border-blue-600"
          type="password"
          placeholder="Пароль"
        />
      </label>
      <button className="w-96 p-2 bg-blue-600 rounded-lg text-white">
        Войти
      </button>
    </form>
  );
}

export default LoginPage;
