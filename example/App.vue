<template>
  <div id="app">
    <div id="nav">
      <router-link to="/a" :replace="false">Home</router-link> |
      <router-link to="/about" v-if="replace" :replace="true">About replace: {{replace}}</router-link>
      <router-link to="/about" v-if="!replace" :replace="false">About replace: {{replace}}</router-link>
      <button @click="replace = !replace">切换</button>
    </div>
    <choo-router-view />
  </div>
</template>

<script>
// import chooRouter from '../lib';
export default {
  data() {
    return {
      replace: false
    };
  },
  watch: {
    $chooRouter: {
      immediate: true,
      deep: true,
      handler () {
        // const {replace, direction} = this.$chooRouter;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>