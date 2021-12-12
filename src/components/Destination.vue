<template>
<div>
    <h1 id="title">
        <span id="number">01</span>PICK YOUR DESTINATION
    </h1>
    <div id="planeteNavs">
        <ul id="planeteList">
            <router-link class="pla" :to="{name:'Moon', params:{id: destination.id}}" v-for='destination in destinations' :key="destination.id">{{destination.name.toUpperCase()}}</router-link>
        </ul>
    </div>
    <router-view :key="$route.path"/>
</div>
</template>

<script>
import store from '../store.js'

export default {
    name: "Destination",
    data() {
        return {
            destinations: store.destinations
        }
    }
}
</script>

<style>
#title{
  margin-left: 15%;
  margin-top: 5%;
}
#number{
  margin-right: 20px;
}

#planeteNavs{
    width: 100%;
    margin-top: 2%;
}

#planeteList {
    color: #8a91a2;
    display: flex;
    justify-content: end;
    width: 73%;
}

.pla {
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    list-style: none;
    font-size: 20px;
    padding-bottom: 10px;
}

.pla:hover{
    border-bottom: solid white 2px;
    padding-bottom: 10px;
}
</style>
