<template>
  <div class="container">
    <div class="header">
      <input
        autofocus
        type="text"
        class="content"
        placeholder="want to to maxLength=20"
        v-model="todoText"
        @keyup.enter="addTodo"
        maxlength="20"
      >
    </div>
    <section>
      <ul>
        <li class="todo" v-for="(item,index) in todoList" :key="index" @dblclick="beginEdit(item,index)">
          <div v-show="!item.isEdit" class="ok" :yes="item.status?'√':''" @click="finsh(item)"></div>
          <span v-show="!item.isEdit" v-bind:class="{finsh:item.status}">  {{item.text}}</span>
          <input   v-todo-focus="item==editTodo"   maxlength="20" class="edit" type="text" v-model="item.text" v-show="item.isEdit"
                 @keyup.enter="endEdit(item)">
          <span class="remove" v-show="!item.isEdit"></span>
        </li>
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
        todoText: "",
        editTodo:{}
      };
    },
    methods: {
      addTodo() {
        this.todoList.push({text: this.todoText, status: false, isEdit: false});
        this.todoText = null;
      },
      finsh(item) {
        item.status = !item.status;
      },
      beginEdit(item, index) {
        if (item.status) return;
        this.todoList.forEach((item)=>{
          item.isEdit=false
        })
         this.editTodo=item;
        item.isEdit = true;
      },
      endEdit(item) {
        item.isEdit = false;
      }
    } ,
    directives: {
      'todo-focus': function (el, binding) {
        if (binding.value) {
          el.focus()
        }
      }
    }
  };
</script>
<style scoped>
  .content {
    height: 40px;
    min-width: 400px;
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
  .todo {
    list-style: none;
    border: 1px solid #ededed;
    min-width: 400px;
    padding: 10px;
    line-height: 20px;
    height: 20px;
    position: relative;
  }
  .todo .edit {
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    width: 100%;
    font-size: 14px;
    height: 20px;
  }
  .todo span {
    display: inline-block;
  }
  .todo .finsh {
    text-decoration: line-through;
    color: #d9d9d9;
  }
  .todo .ok {
    border-radius: 50%;
    height: 20px;
    width: 20px;
    border: 1px solid gray;
    display: inline-block;
    position: absolute;
    left: 20px;
  }
  .todo .ok:after {
    content: attr(yes);
  }
  .todo .remove {
    color: #cc9a9a;
    font-size: 24px;
    position: absolute;
    right: 10px;
  }
  .todo .remove:after {
    content: "×";
  }
  .header {
    position: relative;
    top: 20px;
    left: 30px;
  }
  section {
    position: relative;
    top: 10px;
    left: 130px;
  }
  .container {
    display: flex;
  }
  .el-icon-close {
    color: red;
    font-weight: 100;
  }
</style>

