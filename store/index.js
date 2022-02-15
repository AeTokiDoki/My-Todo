export const state = () => ({
  todos: [],
});

export const mutations = {
  ADD_TODO(state, todo) {
    state.todos = [{ text: todo, done: false }, ...state.todos];
    // state.todos.push({ text: todo, done: false });
  },

  DELET_TODO(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },
};
