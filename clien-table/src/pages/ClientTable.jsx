import React from "react";
import ClientDataTable from "../components/ClientDataTable";
import { useNavigate } from "react-router-dom";
import { createClient } from "../utils/api";

function ClientTable() {
  const [testAdded, setTestAdded] = React.useState(false);
  const randomstring = require("randomstring");
  const clickHandler = () => {
    createClient(
      randomstring.generate(14),
      "Иванов",
      "Иван",
      "Иванович",
      "01.01.2000",
      "12345622342347890"
    )
      .then((res) => setTestAdded(true))
      .catch((err) => console.log(err));
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <>
      <button onClick={logout} className="text-white underline">
        Выйти
      </button>
      <ClientDataTable setTestAdded={setTestAdded} testAdded={testAdded} />
      <button
        className="text-white break-words w-96 bg-blue-600 rounded-2xl p-2 mt-10"
        onClick={clickHandler}
      >
        Добавить тестового клиента
      </button>
    </>
  );
}

export default ClientTable;
