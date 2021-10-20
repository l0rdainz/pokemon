<template>
  <div class="searchbar">
    <form @submit.prevent="setPokemonUrl">
      <input type="text" v-model="searchvalue" />
    </form>
  </div>
</template>

<script>
export default {
  props: ["apiUrl"],
  data: () => {
    return {
      searchvalue: "",
    };
  },
  methods: {
    setPokemonUrl() {
      if (this.searchvalue !== "")
        this.$emit("setPokemonUrl", this.apiUrl + this.searchvalue);
    },
  },
};
</script>
