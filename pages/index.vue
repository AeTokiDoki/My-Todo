<template>
  <div class="app">
    <main class="main">
      <h1>Мои задачи!</h1>
      <div class="todo-list">
        <input
          class="task-input"
          type="text"
          name="todo"
          placeholder="Напишите новую задачу ..."
          v-model="newTodo"
        />
        <button type="button" class="task-button" @click="addTodo">
          Добавить задачу
        </button>
      </div>
      <ul class="task-list">
        <li class="task" v-for="(task, i) in todos" :key="i">
          <input type="checkbox" name="todo" v-model="task.checked" />
          <span>{{ task.text }}</span>
          <button class="button-delete" type="button" @click="deleteTodo(i)">
            Удалить задачу
          </button>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          text: "Пример задачи 1",
          checked: false,
        },
        {
          text: "Пример задачи 2",
          checked: false,
        },
      ],
      newTodo: null,
    };
  },

  methods: {
    addTodo(event) {
      if (this.newTodo !== "") {
        this.todos.push({
          text: this.newTodo,
          checked: false,
        });

        this.newTodo = "";
        event.preventDefault();
      }
    },

    deleteTodo(i) {
      this.todos.splice(i, 1);
    },
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.app {
  font-family: Arial, sans-serif;
  text-align: center;

  width: 80vw;
  /* min-width: 400px; */
  margin: 0 auto;

  background: rgb(231, 206, 206);
  border: 2px solid tomato;
  border-radius: 20px;
}

.todo-list {
  position: relative;
}

.task-input {
  width: 60vw;
  min-height: 30px;

  padding: 2px 2px 2px 4px;
  margin: 20px 20px 40px 20px;
  outline: none;
  border: none;
}

.task-button {
  position: relative;

  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 5px 5px;

  width: 150px;
  min-height: 40px;
  text-align: center;
  text-transform: uppercase;
  background-color: #68b738;

  color: white;

  cursor: pointer;
  border: none;
  border-radius: 50%;
}

.task-list {
  margin: 30px 0 0 20px;
  padding: 0;

  list-style: none;
}

.task {
  display: flex;
  align-items: center;
  min-height: 30px;
  margin-bottom: 20px;
}

.task input:checked ~ span {
  text-decoration: line-through;
}

.task input:checked ~ button {
  display: none;
}

.task span {
  margin-right: 20px;
}

.button-delete {
  padding: 0.7em 1.5em;

  color: #fff;
  text-decoration: none;
  user-select: none;
  background: rgb(212, 75, 56);
  outline: none;
  border: none;

  cursor: pointer;
}
</style>
