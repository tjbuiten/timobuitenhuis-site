<template>
    <div v-on:click="onRoute(route)" class="scale-with-children">
        <div class="shape" v-bind:style="outerShape"/>
        <img class="shape" v-bind:src="getImgUrl(imageName)" v-bind:style="innerShape"/>
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
        },
        outerShape: {
            default: () => ({
                'clip-path': 'polygon(50% 100%, 0 0, 100% 0)'
            }),
            type: Object
        },
        innerShape: {
            default: () => ({
                'clip-path': 'polygon(50% 90%, 7% 4%, 93% 4%)'
            }),
            type: Object
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
    align-content: center;
}

.scale-with-children:hover {
    opacity: 0.75;
}

.shape {
    height: 90%;
    width: 90%;
    position: absolute;
    top: 0;
    background-color: #42b983;
    pointer-events: auto;
    background-position: center;
    background-size: cover;
}
</style>
