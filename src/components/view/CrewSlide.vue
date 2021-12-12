<template>
  <div id="crewslideContainer">
      <div id="dataContainer">
            <h2 id="role">
                {{store[crewIndex].role.toUpperCase()}}
            </h2>
            <h3 id="crewname">
                {{store[crewIndex].name.toUpperCase()}}
            </h3>
            <p id="crewbio">
                {{store[crewIndex].bio}}
            </p>
            <div id="dotslide">
                <div v-for="slideDot, index in slideDots
                " :key="index" @click='crewChanger(slideDot.id)' :style="crewIndex == slideDot.id ?'background-color: #fff' : 'background-color: #8a91a2;'"></div>
            </div>
      </div>
      <div id="crewimagecontainer">
          <img id="crewimage" :src="require(`@/assets/crew/image-${store[crewIndex].name.toLowerCase().replace(' ', '-')}.png`)">
      </div>
  </div>
</template>

<script>
export default {
    name: 'CrewSlide',
    data(){
        return{
            crewIndex: 0,
            slideDots:[
                {
                    id:0
                },
                {
                    id:1
                },
                {
                    id:2
                },
                {
                    id:3
                }
            ]
        }
    },
    props:{
        store: Array
    },
    methods:{
        crewChanger(x){
            this.crewIndex = x
            console.log(this.crewIndex);
        }
    },
    mounted() {
    setInterval(() => {
      this.crewIndex++;
      if(this.crewIndex == 5) {
        this.crewIndex = 1;
      }
    }, 5000);
  }
}
</script>

<style>
#crewslideContainer{
    display: flex;
    width: 85%;
    position: absolute;
    bottom: 0%;
}
#dataContainer{
    width: 30%;
    margin: auto;
}
#role{
    color: #8a91a2;
    font-size: 40px;
}
#crewname{
    color: #fff;
    font-size: 50px;
    margin-top: 5px;
}
#crewbio{
    color: #fff;
    font-size: 20px;
}
#crewimagecontainer{
    margin-bottom: 0;
}
#dotslide{
    display: flex;
    margin-top: 35%;
}
#dotslide div{
    height: 10px;
    width: 10px;
    margin: 10px;
    border-radius: 100%;
}
</style>