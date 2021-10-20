<template>
  <div class="detail">
    <div class="detail-view" v-if="show">
      <div class="image">
        <img
          :src="
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
            number +
            '.png'
          "
          alt=""
        />
        <!--number is a random number generated -->
      </div>
      <!-- stats of the pokemon, read documentation to add/remove items accordingly-->
      <div class="data">
        <h2>{{ pokemon.name }}</h2>
        <div class="property">
          <div class="left">Base Experience</div>
          <div class="right">{{ pokemon.base_experience }} XP</div>
        </div>
        <div class="property">
          <div class="left">Height</div>
          <div class="right">{{ pokemon.height / 10 }} m</div>
        </div>
        <div class="property">
          <div class="left">Weight</div>
          <div class="right">{{ pokemon.weight / 10 }} kg</div>
        </div>
        <h3>Pokemon Types</h3>
        <div class="types">
          <div
            class="type"
            v-for="(value, index) in pokemon.types"
            :key="'value' + index"
          >
            {{ value.type.name }}
          </div>
        </div>
        <h3>Abilities</h3>
        <div class="abilities">
          <div
            class="ability"
            v-for="(value, index) in pokemon.abilities"
            :key="'value' + index"
          >
            {{ value.ability.name }}
          </div>
        </div>
      </div>
      <br />
      <button @click="fetchData">Reload</button>
    </div>
  </div>
</template>

<script>
export default {
  
  data: () => {
    return {
      show: false,
      pokemon: {},
    };
  },
  methods: {
    //generates a random number btwn 1 to 100, increase to see more pokemon
    random1() {
      let num = Math.floor(Math.random() * 100);
      return num;
      
    },
    fetchData() {
      let num = this.random1();
      let url = "http://pokeapi.co/api/v2/pokemon/" + num;
      fetch(url)
        .then((resp) => {
          if (resp.status === 200) return resp.json();
        })
        .then((data) => {
          this.pokemon = data;
          this.show = true;
          this.number = num; //need to ensure that the same number is used to generate the right pic
        })
       
    },

    closeDetail() {
      this.$emit("closeDetail");
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
