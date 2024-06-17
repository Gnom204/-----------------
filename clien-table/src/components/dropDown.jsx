import React from "react";
import { updateStatus } from "../utils/api";

function dropDown({ clientId, setIsChoice, setIsClick }) {
  const changeHandler = (e) => {
    updateStatus(clientId, e.target.value)
      .then((res) => {
        console.log(res);
        setIsChoice(true);
        setIsClick(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <select
      onChange={changeHandler}
      className="w-24 rounded-lg p-2 bg-transparent border border-blue-600"
    >
      <option className="text-black">Выберите Статус</option>
      <option className="text-black" value={"В работе"}>
        В работе
      </option>
      <option className="text-black" value={"Сделка закрыта"}>
        Сделка закрыта
      </option>
      <option className="text-black" value={"Отказано в доступе"}>
        Отказано в доступе
      </option>
    </select>
  );
}

export default dropDown;
