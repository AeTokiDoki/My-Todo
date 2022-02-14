export const state = () => ({
  todos: [],
});

export const mutations = {
  addTodo(state, todo) {
    state.todos = [{ text: todo, done: false }, ...state.todos];
    // state.todos.push({ text: todo, done: false });
  },

  deleteTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

  doneTodo(state, todo) {
    todo.done = !todo.done;
  },
};
