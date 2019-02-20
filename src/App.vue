<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
import Todo from './components/Todo/Todo'

export default {
  name: 'App',
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

</style>
