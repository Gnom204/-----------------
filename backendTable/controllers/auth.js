import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res, next) => {
  const { username, password, fullName } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      User.create({ fullName, username, password: hash })
        .then((user) => {
          const token = jwt.sign(
            {
              id: user._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: "30d" }
          );
          res
            .status(200)
            .json({ data: user, token, message: "Пользователь создан" });
        })
        .catch((err) =>
          res
            .status(403)
            .json({ message: "Данный человечек уже присутствует в базе" })
        );
    })
    .catch((err) => console.log(err));
};
export const login = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then((user) => {
      bcrypt
        .compare(password, user.password)
        .then((result) => {
          if (!result) {
            res.status(400).json({ message: "Неправильный логин или пароль" });
          } else {
            const token = jwt.sign(
              {
                id: user._id,
              },
              process.env.JWT_SECRET,
              { expiresIn: "30d" }
            );
            res.json({ token, user, message: "Вы вошли в систему" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      res.status(403).json({ message: "Такого человечка нет" });
    });
};
export const getMe = (req, res) => {
  User.findById(req.userId)
    .then((user) => {
      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
      );

      res.json({ user, token });
    })
    .catch((err) => {
      res.json({ message: "Такого юзера нет" });
    });
};
