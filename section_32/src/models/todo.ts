export default class TodoType {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.random().toString(36).substr(2, 8);
  }
}
