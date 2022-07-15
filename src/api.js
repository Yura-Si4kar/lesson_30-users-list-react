import { USERS_API } from "./config";

export function getUsersList() {
    return fetch(USERS_API)
      .then((res) => res.json())
}

export function addUserInList(users) {
     return fetch(USERS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(users),
    }).then((res) => res.json())
}

export function deleteUsers(id) {
    return fetch(USERS_API + id, {
      method: 'DELETE',
    })
}