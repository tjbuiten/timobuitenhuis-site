<template>
    <div v-on:click="onRoute(route)" class="scale-with-children">
        <div class="outer-triangle"/>
        <img class="inner-triangle" v-bind:src="getImgUrl(imageName)"/>
    </div>
</template>

<script lang="ts">
import router from "@/router";
export default {
    props: {
        imageName: {
            default: 'universe',
            type: String
        },
        route: {
            default: undefined,
            type: String
        }
    },
    methods: {
        getImgUrl: function (imageName:string) {
            return require('@/assets/' + imageName + '.jpg')
        },
        onRoute: function (route:string) {
            router.push((route == undefined)? router.currentRoute.path: route)
        }
    }
}
</script>

<style scoped>    
.scale-with-children {
    height: 100%;
    width: 100%;
    transition: 0.5s;
    pointer-events: none;
    cursor: pointer;
    filter: drop-shadow(0px 0px 10px #27704f);
}

.scale-with-children:hover {
    opacity: 0.75;
}

.outer-triangle {
    height: 90%;
    width: 90%;
    background-color: #42b983;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    pointer-events: auto;
}

.inner-triangle {
    height: 80%;
    width: 80%;
    top: 3%;
    left: 5%; 
    position: absolute;
    background-color: black;
    background-position: center;
    background-size: cover;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
}
</style>
