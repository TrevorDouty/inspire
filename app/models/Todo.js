export default class Todo {
  constructor(data) {
    this.id = data.id;
    this.description = data.description;
    this.user = data.user;
    this.completed = data.completed

  }

  get TodoTemplate() {
    return /*html*/`
    <div class="card w-75">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Button</a>
    </div>
</div>
`
  }
}