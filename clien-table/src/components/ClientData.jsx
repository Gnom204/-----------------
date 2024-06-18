import React, { useEffect } from "react";
import DropDown from "./dropDown";

function ClientData({ client, setChoice }) {
  const [isClick, setIsClick] = React.useState(true);
  const [isChoice, setIsChoice] = React.useState(false);
  const [status, setStatus] = React.useState(client.status);
  const clickHandler = () => {
    if (isClick) {
      setIsClick(false);
    }
    if (isChoice) {
      setIsChoice(false);
    }
  };

  useEffect(() => {
    setChoice(isChoice);
  }, [isChoice]);

  return (
    <tr className="text-white flex space-x-4">
      <td className="w-24 break-words">{client.accountNumber}</td>
      <td className="w-24 break-words">{client.lastName}</td>
      <td className="w-24 break-words">{client.userName}</td>
      <td className="w-24 break-words">{client.fatheName}</td>
      <td className="w-24 break-words">{client.dateOfBithday}</td>
      <td className="w-24 break-words">{client.authorName}</td>
      <td className="w-24 break-words">{client.INN}</td>
      <td onClick={clickHandler} className="w-24 break-words cursor-pointer">
        {isClick ? (
          status
        ) : (
          <DropDown
            setStatus={setStatus}
            setIsChoice={setIsChoice}
            setIsClick={setIsClick}
            clientId={client._id}
          />
        )}
      </td>
    </tr>
  );
}

export default ClientData;
