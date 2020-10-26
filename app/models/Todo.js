export default class Todo {
  constructor(data) {
    this.id = data._id;
    this.description = data.description;
    this.user = data.user;
    this.completed = data.completed;

  }

  get TodoTemplate() {
    return /*html*/`
<section class="d-flex">${this.Color} <button class = "text-success close" onclick="app.todoController.toggleTodoStatus('${this.id}')"><span><b>&#10003;</b></span></button>
<button class="text-danger close float-right" onclick="app.todoController.removeTodo('${this.id}')"> <span>&times;</span> </button></section>
`
  }


  get Color() {

    if (this.completed) {
      return `<h4 class='text-green'>${this.description}</h4>`
    } else {
      return `<h4 class='text-red'>${this.description}</h4>`
    }

  }


}