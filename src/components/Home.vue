<template>
  <div>
      <HomeText :infos='infos'/>
  </div>
</template>

<script>
import infos from "../store.js"
import HomeText from "./HomeText.vue"

export default {
    name: "Home",
    components:{
        HomeText
    },
    data(){
        return{
            infos: infos
        }
    }
}
</script>

<style>

</style>