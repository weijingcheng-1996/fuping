<template>
  <div id="app">
    <title-tabel />
    <router-view />
  </div>
</template>

<script>
import titleTabel from "@/components/Title";
export default {
  name: "App",
  components: {
    titleTabel
  },
  created() {
    
  },
  methods: {
    
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
