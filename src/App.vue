<template>
  <div class="app" style="text-align:center">
    <h2>{{ $store.state.count }}</h2>
    <hr>
    <ComponentA/>
  </div>
</template>

<script>
import ComponentA from "@/components/ComponentA.vue"
export default {
  name:"App",
  mounted() {
    this.$store.state.count++;
  },
  components:{
    ComponentA
  }
}
</script>

<style>

</style>