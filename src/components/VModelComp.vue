<template>
  <div class="quote">
    <input v-model="my_quote">
  </div>
</template>

<script>
export default {
  data() {
    return {
      my_quote: "Stay hungry, stay foolish"
    };
  }
};
</script>