<template>
  <div class="component-a" style="text-align:center">
    <h2>{{ $store.getters.getCount }}</h2>
    <button @click="add">Add</button>
  </div>
</template>

<script>
export default {
  name:"ComponentA",
  mounted() {
    // this.$store.state.count++;
  },
  methods: {
      add(){
          this.$store.dispatch("addAction");
      }
  },
}
</script>

<style>

</style>