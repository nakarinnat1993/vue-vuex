<template>
  <div class="app" style="text-align:center">
    <h2>{{ $store.state.count }}</h2>
    <hr>
    <ComponentA/>
    <hr>
    <ComponentB/>
  </div>
</template>

<script>
import ComponentA from "@/components/ComponentA.vue"
import ComponentB from "@/components/ComponentB.vue"

export default {
  name:"App",
  mounted() {
    // this.$store.state.count++;
  },
  components:{
    ComponentA,
    ComponentB
  }
}
</script>

<style>

</style>