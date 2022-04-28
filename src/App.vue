<template>
  <router-view :insurance="insurance" @dataChange="dataChanger($event)" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Insurance from "./types/InsuranceDetail";

export default defineComponent({
  setup() {
    const insurance = ref({});

    const dataChanger = (event: Insurance) => {
      insurance.value = event;
    };

    return { dataChanger, insurance };
  },
});
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  padding: 10%;
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: white;
}

.input {
  padding: 10px;
  margin-bottom: 8px;
}

.step {
  text-align: center;
  background: #e2e6e8;
  padding: 50px;
}
.capitalize {
  text-transform: capitalize;
}
.back {
  background: white !important;
  color: black !important;
  border: 1px solid black !important;
}
</style>
