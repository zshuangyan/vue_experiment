<template>
  <div id="userinfo">
    <button v-if="!isLogin" @click="login">Login</button>
    <button v-else @click="login">LoginOut</button>
    <div v-if="isLogin">
      <div>Name: {{ name }}</div>
      <div class="address">
        <p>Address</p>
        <ul v-for="address in addresses" :key="address.id">
          <li>{{ address}}</li>
        </ul>
      </div>
      <div class="relation">
        <p>Relation</p>
        <ul v-for="(item, key, index) in relations" :key="index">
          <li>{{ key | uppercase }}: {{ item }}</li>
        </ul>
      </div>
    </div>
    <ComputedComp v-if="isLogin"/>
    <VModelComp v-if="isLogin"/>
    <VuexComp v-if="isLogin"/>
  </div>
</template>

<script>
import ComputedComp from "./ComputedComp";
import VModelComp from "./VModelComp";
import VuexComp from "./VuexComp";
export default {
  components: {
    ComputedComp,
    VModelComp,
    VuexComp
  },

  data() {
    return {
      isLogin: false,
      name: "wennie",
      addresses: ["Luohu XingGuiYuan", "NanShan Tencent Building"],
      relations: {
        mother: "Sundy",
        father: "Blues",
        brother: "Joey"
      }
    };
  },

  methods: {
    login() {
      this.isLogin = !this.isLogin;
    }
  },

  filters: {
    uppercase(v) {
      return v.charAt(0).toUpperCase() + v.slice(1);
    }
  }
};
</script>

<style scoped>
button {
  background-color: goldenrod;
}

.address {
  color: red;
}

.relation {
  color: blue;
}
</style>