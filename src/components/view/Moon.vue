<template>
  <div class="planeteContainer">
      <div class="planeteImage">
        <img :src="require(`@/assets/destination/image-${destination.name.toLowerCase()}.png`)" />
      </div>
      <div class="planeteContent">
        <h1 class='planeteTitle'>{{destination.name.toUpperCase()}}</h1>
        <p class="planeteDescription">{{destination.description}}</p>
        <hr class="planeteSeparator">
        <div class="planeteData">
          <div class="planeteMesure">
            <h6>AVG DISTANCE</h6>
            <h6>{{destination.distance}}</h6>
          </div>
          <div class="planeteMesure">
            <h6>EST TRAVEL TIME</h6>
            <h6>{{destination.travel}}</h6>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import store from '../../store.js'

export default {
    props:{
      id:{
        type: Number,
        required: true
      }
    },
    computed: {
      destination() {
        return store.destinations.find(destination => destination.id == this.id)
      }
    }
}
</script>

<style>
.planeteContainer{
  display: flex;
  justify-content: center;
  width: 60%;
  margin: auto;
  margin-top: 70px;
}
.planeteImage{
  width: 50%;
  
}
.planeteContent{
  width: 40%;
  color: white;
  margin: auto;
  margin-left: 110px;
}
.planeteData{
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.planeteTitle{
  font-size: 110px;
  margin: 0;
}

.planeteDescription{
  font-size: 21px;
}
.planeteSeparator{
  width: 100%;
}

.planeteMesure{
  font-size: 30px;
  text-align: center;
  margin: auto;
}

.planeteMesure h6{
  margin: 20px;
}
</style>