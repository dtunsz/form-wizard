<template>
  <div class="step">
    <h1>Hello There!</h1>
    <p>Let's buy some insurance. It is going to take a few steps</p>
    <router-link :to="'/stepone'">
      <Button> start </Button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../components/base/Button.vue";

export default defineComponent({
  name: "StepOne",

  components: {
    Button,
  },
});
</script>

<style>
</style>