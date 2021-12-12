<template>
<div id="technoContainer">
    <div class="slideCounterContainer">
        <div v-for="indexContainer, index in indexContainers" :key="index" :class="indexContainer.id == technoIndex ? 'slideCounterCheck' : 'slideCounterUncheck'" @click="technoIndexChanger(indexContainer.id)">{{store[indexContainer.id].id}}</div>
    </div>
    <div id="technoTextContainer" style="color: white">
        <h6 style="font-size: 20px">
            {{'The terminology...'.toUpperCase()}}
        </h6>
        <h1 style="font-size: 40px">
            {{store[technoIndex].name.toUpperCase()}}
        </h1>
        <p style="font-size: 30px">
            {{store[technoIndex].description}}
        </p>
    </div>
    <div>
        <img :src="require(`@/assets/technology/image-${store[technoIndex].name.toLowerCase().replace(' ', '-')}-portrait.jpg`)">
    </div>
</div>
</template>

<script>
export default {
    name: 'TechnoSlide',
    data() {
        return {
            technoIndex: 0,
            indexContainers: [{
                    id: 0
                },
                {
                    id: 1
                },
                {
                    id: 2
                },
            ]
        }
    },
    props: {
        store: Array
    },
    methods: {
        technoIndexChanger(x) {
            this.technoIndex = x
        }
    },
    mounted() {
    setInterval(() => {
      this.technoIndex++;
      if(this.technoIndex == 2) {
        this.technoIndex = 0;
      }
    }, 5000);
  }
}
</script>

<style>
#technoContainer {
    display: flex;
    justify-content: center;
}

.slideCounterCheck {
    height: 90px;
    width: 90px;
    border-radius: 100%;
    background-color: #fff;
    color: black;
    text-align: center;
    font-size: 45px;
    margin: 35px 0px;
}

.slideCounterUncheck {
    height: 90px;
    width: 90px;
    border-radius: 100%;
    background-color: transparent;
    border: solid 1px white;
    color: whitesmoke;
    text-align: center;
    font-size: 45px;
    margin: 35px 0px;
}

.slideCounterContainer {
    width: 35%;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 4%;
}

#technoTextContainer {
    width: 40%;
    padding: 30px;
    margin-right: 8%;
}
</style>
