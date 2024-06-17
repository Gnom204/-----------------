import React, { useEffect } from "react";
import { getAllClients } from "../utils/api";
import ClientData from "./ClientData";

function ClientDataTable({ testAdded }) {
  const [clients, setClients] = React.useState([]);
  const [isChoice, setIsChoice] = React.useState(false);

  const getClients = () => {
    getAllClients()
      .then((res) => {
        setClients(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getClients();
  }, [isChoice]);

  useEffect(() => {
    getClients();
  }, [testAdded]);

  return (
    <table className="mt-10 border-separate border border-slate-500">
      <thead>
        <tr className="text-white flex space-x-4 ">
          <th className="w-24 break-words">Номер счета</th>
          <th className="w-24 break-words">Фамилия</th>
          <th className="w-24 break-words">Имя</th>
          <th className="w-24 break-words">Отчество</th>
          <th className="w-24 break-words">Дата рождения</th>
          <th className="w-24 break-words">ФИО ответственного</th>
          <th className="w-24 break-words">ИНН</th>
          <th className="w-24 break-words">Статус</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <ClientData
            setChoice={setIsChoice}
            key={client.accountNumber}
            client={client}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ClientDataTable;
