<template>
  <div class="age">
    <div>Age: {{ age }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["age"])
  }
};
</script>