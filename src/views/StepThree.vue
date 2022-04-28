<template>
  <div class="step">
      <h1>Summary</h1>

      <div class="">
          <p>Name: {{ insurance.name }}</p>
          <p>Age: {{ insurance.age }}</p>
          <p>Where do you live: {{ insurance.country }}</p>
          <p class="capitalize">Package: {{ insurance.selectedPackage }}</p>
          <p>Premium: {{ insurance.packageCost }}{{ insurance.currency }}</p>
      </div>

      <div class="">
          <router-link :to="'/stepone'"><Button class="back">Back</Button></router-link>
          <router-link :to="'/'"><Button>Buy</Button></router-link>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Insurance from '../types/InsuranceDetail'
import Button from '../components/base/Button.vue';

export default defineComponent({
    name: "StepThree",

    components: {
        Button
    },

    props: {
        insurance: {
            type: Object as PropType<Insurance>,
            required: true
        }
    },

    setup(){


        return {}
    },

})
</script>

<style>

</style>