<template>
<div>
    <h1 id="titleTechno"><span id="numberTechno">03</span>SPACE LAUNCH 101</h1>
    <TechnoSlide :store='store.technology'/>
</div>
</template>

<script>
import TechnoSlide from './view/TechnoSlide.vue'
import store from '../store.js'

export default {
    name: 'Technology',
    data(){
      return{
        store: store
      }
    },
    components:{
      TechnoSlide
    }
}
</script>rgba(255, 255, 255, 0.137)

<style>
#titleTechno{
  margin-left: 15%;
  margin-top: 5%;
  color: #fff;
}

#numberTechno{
  margin-right: 20px;
  color: rgba(255, 255, 255, 0.137)
}
</style>
