import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Models/Todo.js"

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'trevor/todos/'



class TodoService {
  async getTodos() {
    let res = await api.get(url);
    ProxyState.todos = res.data.data.map(t => new Todo(t))
    console.log(res.data.data);
    //TODO Handle this response from the server
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data.data)]

    //TODO Handle this response from the server
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    todo.completed = todo.completed ? false : true;
    console.log(todo.completed)

    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await api.put(url + todoId, todo);
    this.getTodos()
    //TODO how do you trigger this change
  }

  async removeTodo(id) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
    let res = await api.delete(url + id)
    // console.log(res.data.data)
    this.getTodos()
  }
}


const todoService = new TodoService();
export default todoService;