<template>
  <div class="task">
    <input type="checkbox" name="todo" v-model="task.done" />
    <span>{{ task.text }}</span>
    <button @click="removeTask" type="button" class="button-delete">
      Удалить задачу
    </button>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    removeTask() {
      this.$store.commit("DELET_TODO", this.task);
    },
  },
};
</script>

<style>
</style>
