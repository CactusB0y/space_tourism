<template>
<div>
  <h1 id="titleCrew"><span id="numberCrew">02</span>MEET YOUR CREW</h1>
  <CrewSlide :store='store'/>
</div>
</template>

<script>
import CrewSlide from "./view/CrewSlide.vue"
import store from '../store.js'

export default {
    name: "Crew",
    data(){
      return{
        store: store.crew
      }
    },
    components: {
        CrewSlide,
    },
    
};
</script>

<style>
#titleCrew{
  margin-left: 15%;
  margin-top: 5%;
  color: #fff;
}

#numberCrew{
  margin-right: 20px;
}
</style>
