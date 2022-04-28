<template>
  <div>
    <div v-if="!isAgeError" :class="$style.info">
      <div>
        <h1>Tell us about yourself</h1>
        <label :class="$style.block" for="name">Name</label>
        <input v-model="name" type="text" class="input" id="name" />
        <br />
        <label :class="$style.block" for="age">Age:</label>
        <input v-model="age" type="number" class="input" id="age" />
        <br />
        <label for="country"> Where do you live </label>
        <br />
        <select v-model="country" :class="[$style.block, 'input']" id="country">
          <option value="Hong Kong">Hong Kong</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
        </select>

        <br />
        <div :class="$style.block">
          <label :class="$style.block" for="">
            <input
              v-model="selectedPackage"
              value="standard"
              class="input"
              type="radio"
              name=""
              id=""
            />
            Standard
          </label>
          <label :class="$style.block" for="">
            <input
              v-model="selectedPackage"
              value="safe"
              type="radio"
              class="input"
              name=""
              id=""
            />
            Safe
            <span v-if="age">(+{{ extraCost.safe }}{{ currency }}, 50%)</span>
          </label>
          <label :class="$style.block" for="">
            <input
              v-model="selectedPackage"
              value="super safe"
              type="radio"
              class="input"
              name=""
              id=""
            />
            Super Safe
            <span v-if="age"
              >(+{{ +extraCost.superSafe }}{{ currency }}, 75%)</span
            >
          </label>
        </div>

        <br />

        <h1>Your Premium is: {{ packageCost }} {{ currency }}</h1>

        <div>
          <router-link :to="'/'">
            <Button class="back">Back</Button>
          </router-link>
          <Button @click="nextStep" :disabled="age <= 0 || !name" class="">
            Next
          </Button>
        </div>
      </div>
    </div>

    <div v-else class="step">
      <h1>Ooops</h1>
      <p>Your age is over our accepted limit</p>
      <p>We are sorry but we cannot insure you now</p>

      <router-link :to="'/'"><Button>OK :(</Button></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from "vue";
import { useRouter } from "vue-router";
import Button from "../components/base/Button.vue";

export default defineComponent({
  name: "StepTwo",

  components: {
    Button,
  },

  setup(props, { emit }) {
    type Country = "Hong Kong" | "USA" | "Australia";
    type Package = "standard" | "safe" | "super safe";

    const name = ref("");
    const age = ref(0);
    const country = ref<Country>("Hong Kong");
    const selectedPackage = ref<Package>("standard");
    const currency = ref("HKD");
    const rate = ref(1);
    const isAgeError = ref(false);
    const router = useRouter();

    watch(country, () => {
      if (country.value === "Hong Kong") {
        currency.value = "HKD";
        rate.value = 1;
      } else if (country.value === "USA") {
        currency.value = "USD";
        rate.value = 2;
      } else {
        currency.value = "AUD";
        rate.value = 3;
      }
    });

    const packageCost = computed(() => {
      let cost = 10 * age.value * rate.value;
      if (selectedPackage.value === "safe") {
        return (cost = cost + cost * 0.5);
      } else if (selectedPackage.value === "super safe") {
        return (cost = cost + cost * 0.75);
      }
      return cost;
    });

    const extraCost = computed(() => {
      let cost = 10 * age.value * rate.value;
      return { safe: cost * 0.5, superSafe: cost * 0.75 };
    });

    const userData = reactive({
      name,
      age,
      country,
      currency,
      selectedPackage,
      packageCost,
    });

    const nextStep = () => {
      if (age.value >= 100) {
        isAgeError.value = true;
        return;
      }
      emit("dataChange", userData);
      router.push("/buy");
    };

    return {
      name,
      age,
      country,
      selectedPackage,
      currency,
      userData,
      packageCost,
      extraCost,
      isAgeError,
      nextStep,
    };
  },
});
</script>

<style lang="scss" module>

.block {
  display: block;
  padding: 5px;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>