import React, { useEffect } from "react";
import { getAllClients } from "../utils/api";
import ClientData from "./ClientData";

function ClientDataTable({ testAdded, setTestAdded }) {
  const [clients, setClients] = React.useState([]);
  const [isChoice, setIsChoice] = React.useState(false);
  const [statusValue, setStatusValue] = React.useState("");

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
    setTestAdded(false);
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
