export default class Todo {
  constructor(data) {
    this.id = data.id;
    this.description = data.description;
    this.user = data.user;
    this.completed = data.completed

  }

  get TodoTemplate() {
    return /*html*/`
    <h3>${this.description}</h3>
`
  }
}