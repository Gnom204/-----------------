import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center space-x-10 items-center">
      <div className="p-3 w-48 text-center  bg-transparent border border-blue-600 rounded-full">
        <NavLink className="text-white" to="/register">
          Создать аккаунт
        </NavLink>
      </div>
      <div className="p-3 w-32 text-center bg-blue-600 border border-blue-200 rounded-full">
        <NavLink className="text-white" to="/login">
          Войти
        </NavLink>
      </div>
    </div>
  );
}

export default App;
