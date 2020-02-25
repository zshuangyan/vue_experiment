<template>
  <div id="app">
    <VForComp/>
  </div>
</template>

<script>
import VForComp from "./components/VForComp";
export default {
  name: "App",
  components: {
    VForComp
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
