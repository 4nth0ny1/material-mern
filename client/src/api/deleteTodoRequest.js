const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MjA1MDAyNH0.1_afn4p48IsmWcLNrYd0AjVtrf5VhoM3jyrtQ7BSKSE";

export default (id) => {
  return fetch(`http://localhost:8080/todos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
