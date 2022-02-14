<template>
  <div class="app">
    <form class="main">
      <h1>Мои задачи!</h1>
      <div class="todo-list">
        <input
          class="task-input"
          type="text"
          name="todo"
          placeholder="Напишите новую задачу ..."
          v-model="newTodo"
          @keypress.enter="addTodo"
        />
        <button type="button" class="task-button" @click="addTodo">
          Добавить задачу
        </button>
      </div>
      <div class="task-list">
        <li class="task" v-for="(task, i) in todos" :key="i">
          <input type="checkbox" name="todo" v-model="task.checked" />
          <span>{{ task.text }}</span>
          <button class="button-delete" type="button" @click="deleteTodo(i)">
            Удалить задачу
          </button>
        </li>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      newTodo: "",
    };
  },

  async mounted() {
    const data = await localStorage.getItem("todos");
    if (data) {
      this.todos = JSON.parse(data);
    }
  },

  methods: {
    addTodo() {
      if (this.newTodo !== "") {
        this.todos.push({
          text: this.newTodo,
          checked: false,
        });

        localStorage.setItem("todos", JSON.stringify(this.todos));
      }

      this.newTodo = "";
    },

    deleteTodo(i) {
      this.todos.splice(i, 1);
      localStorage.removeItem("todos", JSON.stringify(this.todos));
    },
  },
};
</script>
