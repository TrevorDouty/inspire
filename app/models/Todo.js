export default class Todo {
  constructor(data) {
    this.id = data._id;
    this.description = data.description;
    this.user = data.user;
    this.completed = data.completed;

  }

  get TodoTemplate() {
    return /*html*/`
${this.Color} <button class = "text-success close" onclick="app.todoController.toggleTodoStatus('${this.id}')"><span>&#10003;</span></button>
<button class="text-danger close float-right" onclick="app.todoController.removeTodo('${this.id}')"> <span>&times;</span> </button>
`
  }


  get Color() {

    if (this.completed) {
      return `<p class='text-green'>${this.description}</p>`
    } else {
      return `<p class='text-red'>${this.description}</p>`
    }

  }


}