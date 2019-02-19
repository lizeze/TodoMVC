<template>
  <div class="container">
    <div class="header">
      <input
        type="text"
        class="content"
        placeholder="want to to"
        v-model="todoText"
        @keyup.enter="addTodo"
      >
    </div>
    <section>
    <ul>
      <li v-for="(item,index) in todoList" :key="index">{{item}}</li>
    </ul>
    </section>
  </div>
</template>
<script>
export default {
  name: "todo",
  data() {
    return {
      todoList: [],
      todoText: ""
    };
  },
  methods: {
    addTodo() {
      this.todoList.push(this.todoText);
    }
  }
};
</script>
<style scoped>
.content {
  height: 40px;
  width: 400px;
  border-radius: 2em;
  font-size: 20px;
  background: white;
}
.content:focus {
  outline: -webkit-focus-ring-color auto 0px;
}

::-webkit-input-placeholder {
  text-align: left;
  font-style: italic;
  font-weight: 300;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
li {
  list-style: none;
  border: 1px solid #ededed;
  width: 400px;
}
.header{
     position: relative;
     top:20px;
     left: 30px;
}
section{
     position: relative;
     top:40px;
     left: 130px;
}
</style>

