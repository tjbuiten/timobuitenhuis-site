<template>
    <div class="container" v-on:click="updateRoute(route)">
        <div class="shape" v-bind:style="clickable? [outerShape, clickableShape]: outerShape"/>
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
        },
        clickable: {
            default: false,
            type: Boolean
        }
    },
    methods: {
        getImgUrl: function (imageName:string) {
            return require('@/assets/' + imageName + '.jpg')
        },
        updateRoute: function (route:string) {
            router.push((route == undefined)? router.currentRoute.path: route)
        }
    },
    data() {
        return {   
            clickableShape: {
                'pointer-events': 'auto'
            }
        }
    }
}
</script>

<style scoped>    
.container {
    height: 100%;
    width: 100%;
    transition: 0.75s;
    pointer-events: none;
    align-content: center;
    cursor: pointer;
    filter: drop-shadow(0px 0px 10px #27704f);
}

.container:hover {
    opacity: 0.75;
}

.shape {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    background-color: #42b983;
    pointer-events: none;
    background-position: center;
    background-size: cover;
}
</style>
