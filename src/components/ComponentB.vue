<template>
  <div class="component-b" style="text-align:center">
    <h2>{{ $store.state.count }}</h2>
    <button @click="del">Delete</button>
  </div>
</template>

<script>
export default {
  name:"ComponentB",
  mounted() {
    // this.$store.state.count++;
  },
  methods: {
      del(){
          this.$store.dispatch("delAction");
      }
  },
}
</script>

<style>

</style>