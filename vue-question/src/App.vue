<template>
  <div id="app">
    <Parent/>
    <Child/>
  </div>
</template>

<script>
import Parent from './components/Parent'
import Child from './components/Child'

export default {
  name: 'App',
  components: {
    Parent,
    Child
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
</style>
