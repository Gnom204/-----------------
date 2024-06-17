import { API_URL } from "./config";

export function registerUser(fullName, username, password) {
  return fetch(API_URL + "/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullName, username, password }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(
        "Пользователь с таким email уже существует(это не высший уровень UX, просто лень было валидировать инпуты)"
      );
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
      return data;
    });
}

export function loginUser(username, password, token) {
  return fetch(API_URL + "/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(
        "Неверное имя пользователя или пароль(это не высший уровень UX, просто лень было валидировать инпуты)"
      );
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
      return data;
    });
}

export function createClient(
  accountNumber,
  lastName,
  userName,
  fatheName,
  dateOfBithday,
  INN
) {
  return fetch(API_URL + "/api/clients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      accountNumber,
      lastName,
      userName,
      fatheName,
      dateOfBithday,
      INN,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      return data;
    });
}

export function getMe() {
  return fetch(API_URL + "/api/auth/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(
        "Неверное имя пользователя или пароль(это не высший уровень UX, просто лень было валидировать инпуты)"
      );
    })
    .then((data) => {
      return data;
    });
}

export function getAllClients() {
  return fetch(API_URL + "/api/clients", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(
        "Неверное имя пользователя или пароль(это не высший уровень UX, просто лень было валидировать инпуты)"
      );
    })
    .then((data) => {
      return data;
    });
}

export function updateStatus(id, status) {
  return fetch(API_URL + "/api/clients/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ status }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(
        "Неверное имя пользователя или пароль(это не высший уровень UX, просто лень было валидировать инпуты)"
      );
    })
    .then((data) => {
      return data;
    });
}
