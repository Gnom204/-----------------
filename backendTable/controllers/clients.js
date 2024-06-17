import Client from "../models/Client.js";
import User from "../models/User.js";

export const createClient = (req, res) => {
  const { accountNumber, lastName, userName, fatheName, dateOfBithday, INN } =
    req.body;
  User.findById(req.userId).then((user) => {
    Client.create({
      accountNumber,
      lastName,
      userName,
      fatheName,
      dateOfBithday,
      INN,
      fullNameAdmin: req.userId,
      authorName: user.fullName,
    }).then((newClient) => {
      console.log(newClient);
      User.findByIdAndUpdate(
        req.userId,
        { $push: { clients: newClient } },
        { new: true }
      )
        .then((user) => {
          console.log(user);
        })
        .catch((err) => {
          console.log(err);
        });
      res.json(newClient);
    });
  });
};

export const getUserClients = (req, res) => {
  const { userId } = req;
  console.log(userId);

  Client.find({ fullNameAdmin: userId })
    .then((clients) => {
      res.json(clients);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  Client.findByIdAndUpdate(id, { status: status }, { new: true })
    .then((client) => {
      res.json(client);
    })
    .catch((err) => {
      console.log(err);
    });
};
