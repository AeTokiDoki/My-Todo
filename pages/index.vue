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
        <Task v-for="(task, i) in $store.state.todos" :key="i" :task="task" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        this.$store.commit("ADD_TODO", this.newTodo);
        this.newTodo = "";
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    },
  },
};
</script>
