<template>
  <div class="component-a" style="text-align:center">
    <h2>{{ $store.state.count }}</h2>
  </div>
</template>

<script>
export default {
  name:"ComponentA",
  mounted() {
    // this.$store.state.count++;
  },
}
</script>

<style>

</style>