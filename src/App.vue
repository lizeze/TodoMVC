<template>
  <div id="app">

   <router-view></router-view>
  </div>
</template>

<script>
import Todo from './components/Todo/Todo'

export default {
  name: 'App',
  data(){
    return{
      items: ["question","aaa"],
    }
  },
  components: {
    Todo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.clearfix:after {
  content: '';
  display: block;
  clear: both;
}
.index-warpper {
  display: block;
  margin: 4.266px 0 0;
  margin: .26667rem 0 0;
  background: #fff;
  border-radius: 4px;
  -webkit-box-shadow: 0 0 5px 1px rgba(26, 26, 26, .1);
  box-shadow: 0 0 5px 1px rgba(26, 26, 26, .1);
  position: relative;
  padding-bottom: .1px;
  max-width: 100%;
  display: flex;
}

.index {
  display: flex;
}

.index .item {
  list-style: none;
  padding: 3px 10px;
  border-radius: 50%;
  border: 1px solid #dcdfe6;
  background: gray;
  margin-left: 8px;
}


</style>
