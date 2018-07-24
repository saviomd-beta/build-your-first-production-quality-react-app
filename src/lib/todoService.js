const baseUrl = 'http://localhost:8080/todos'

export const loadTodos = () => {
  return fetch(baseUrl)
    .then(res => res.json())
}

export const createTodo = (todo) => {
  return fetch(baseUrl, {
    body: JSON.stringify(todo),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => res.json())
}

export const saveTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
    body: JSON.stringify(todo),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PUT',
  }).then(res => res.json())
}
