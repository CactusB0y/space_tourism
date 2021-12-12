<template>
  <div id="app" :style="{ backgroundImage: `url(${newback})` }">
    <nav>
      <div>
        <svg style="margin-left: 100%" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              fill="#0B0D17"
            />
          </g>
        </svg>
      </div>
      <div id="navs">
        <router-link @click.native="changeBackground('home')" class="routerl" to="/"><span>00 </span> Home</router-link>
        <router-link @click.native="changeBackground('destination')" class="routerl" to="/destination/1"><span>01 </span> Destination</router-link>
        <router-link @click.native="changeBackground('crew')" class="routerl" to="/crew"><span>02 </span> Crew</router-link>
        <router-link @click.native="changeBackground('technology')" class="routerl" to="/technology"><span>03 </span> Technology</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import back_home from "./assets/home/background-home-desktop.jpg";
import back_destination from "./assets/destination/background-destination-desktop.jpg";
import back_crew from "./assets/crew/background-crew-desktop.jpg";
import back_technology from "./assets/technology/background-technology-desktop.jpg";

export default {
  name: "App",
  data() {
    return {
      back: back_home,
      homeground: back_home,
      destiground: back_destination,
      crewground: back_crew,
      technoground: back_technology,
    };
  },
  methods:{
    changeBackground(x){
      if (x == 'home') {
        this.back = this.homeground
      } else if(x == 'destination'){
        this.back = this.destiground
      } else if(x == 'crew'){
        this.back = this.crewground
      } else if(x == 'technology'){
        this.back = this.technoground
      }
    }
  },
  computed:{
    newback: function() {
      this.changeBackground()
      return this.back
    }
  }
};
</script>

<style>

*{
  font-family: 'Bellefair', serif;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

nav {
  display: flex;
  width: 100%;
  height: 150px;
  justify-content: space-between;
  align-items: center;
}

#app {
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

#navs {
  width: 50%;
  height: 95px;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  background-color: transparent;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.137);
}

.routerl{
  color: rgba(255, 255, 255, 0.527);
  text-decoration: none;
  margin: 10px 30px;
}

.routerl span{
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
</style>
