<template>
<div>
    <div id="content">
        <div id="textHome">
            <h3 id="title">{{infos.home[0].title}}</h3>
            <h1 id="space">{{infos.home[0].space}}</h1>
            <p id="description">{{infos.home[0].description}}</p>
        </div>
        <div>
            <div id="roundWhite">
                <span id="littlespan">{{infos.home[0].explore}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'HomeText',
    props: {
        infos: Object
    }
}
</script>

<style>
#roundWhite{
    margin-top: 300px;
    background-color: #fff;
    border-radius: 100%;
    height: 300px;
    width: 300px;
    line-height: 310px;
    text-align: center;
}

#littlespan{
    font-size: 38px;
}
 
#content{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#textHome {
    width: 30%;
    margin-top: 320px;
}

#title {
    color: rgba(255, 255, 255, 0.787);
    font-size: 28px;
    margin: 0;
    margin-left: 32px;
}

#description {
    color: rgba(255, 255, 255, 0.787);
    margin-left: 0;
    padding: 0px 30px;
    font-size: 22px;
}

#space {
    color: #fff;
    font-size: 150px;
    margin: 20px 10px;
    margin-left: 48px;
}
</style>
