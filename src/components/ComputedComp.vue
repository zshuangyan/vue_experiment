<template>
  <div class="marks">
    <h3>Marks</h3>
    <div v-for="item in items" :key="item.id">
      <ul>
        {{ item.name }}:
        <input v-model="item.mark">
      </ul>
    </div>
    <p>Total: {{ totalMark }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "English",
          mark: 98
        },
        {
          name: "Chinese",
          mark: 89
        }
      ]
    };
  },

  computed: {
    totalMark() {
      var total = 0;
      for (var item of this.items) {
        total += Number.parseFloat(item.mark);
      }
      return total;
    }
  }
};
</script>