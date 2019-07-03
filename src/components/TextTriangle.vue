<template>
    <div class="scale-with-children">
        <div class="text-block" v-text="text" v-bind:style="show ? openstyle : closedstyle "></div>
        <div class="outer-triangle" v-on:click="show = !show" v-bind:style="shape"/>
        <img class="inner-triangle" v-bind:src="getImgUrl(imageName)" v-bind:style="shape"/>
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
        text: {
            default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id bibendum tellus, sed tristique mauris. Aliquam erat volutpat. Ut eleifend lorem eget erat condimentum rutrum. Vestibulum pharetra, eros ut commodo vehicula, velit nibh dignissim erat, et consectetur eros nulla a orci. Curabitur imperdiet posuere mattis. Donec commodo fringilla odio sed fermentum. Sed mattis erat in massa faucibus, a hendrerit nisi tempus.Maecenas molestie sollicitudin lorem, non convallis mauris rhoncus quis. Curabitur sollicitudin, nisl eu dapibus auctor, orci mauris vestibulum leo, vitae rhoncus nibh purus eu nibh. Nunc id ultrices enim. Sed id interdum erat, nec pretium nunc. Suspendisse lectus enim, iaculis id convallis id, porta varius tortor. Mauris vel tempus urna, porttitor lacinia justo. Aenean posuere molestie feugiat. Ut mauris nibh, condimentum at arcu nec, tincidunt placerat purus. Etiam hendrerit pellentesque lacus id congue. Vestibulum vel interdum tellus. Mauris eleifend bibendum consequat. In hac habitasse platea dictumst. Nullam quis nunc in elit consectetur tempor sed placerat erat. Fusce consectetur varius placerat. Phasellus tempus felis et tincidunt blandit. Sed fermentum dui et ullamcorper rhoncus.Suspendisse eget purus tellus. Nullam a lacus in felis tincidunt commodo id vel dui. Nullam felis magna, dignissim non fringilla et, interdum id enim. Quisque non felis dapibus elit laoreet aliquet. Praesent ornare libero turpis, vel euismod est fermentum ac. Mauris non imperdiet enim. Donec a elementum est. Sed lobortis, ligula id porta auctor, tellus lacus gravida magna, quis molestie odio quam vel lectus. Nam gravida tempus quam ut fringilla. Praesent hendrerit sem laoreet ante consequat dictum. Nulla vitae eros interdum, pulvinar sem rutrum, bibendum lacus. Sed rhoncus varius faucibus. Duis a odio consequat, egestas nisi in, interdum magna.Nam a lacus ac leo ornare rhoncus eleifend eget nulla. Sed rhoncus dolor aliquet est dictum, sed varius ex mattis. Aenean consectetur enim ac metus ornare, feugiat imperdiet ipsum pretium. Curabitur ornare dignissim quam. Nam ac elementum felis, quis sollicitudin enim. Nulla vehicula orci quis tortor sollicitudin semper. Aliquam vulputate est vitae efficitur euismod. Aenean hendrerit mattis ante nec elementum. Pellentesque volutpat lobortis risus, id rutrum ante dictum vitae. Nam euismod ultricies vehicula. Vestibulum ultrices ornare nulla, sed tempus nisi laoreet et.Cras fermentum sem vitae massa aliquet luctus. Nam odio turpis, pretium ut interdum ut, laoreet at odio. Cras eleifend fermentum odio, ut mattis neque cursus sed. Praesent vel leo risus. Pellentesque elit tortor, porttitor sit amet urna vel, condimentum molestie tortor. Nullam purus lorem, sodales nec interdum sed, malesuada at magna. Vivamus sit amet vulputate neque. Donec interdum nec neque iaculis tempor. Aliquam erat volutpat. Fusce leo lorem, accumsan ac sapien vel, egestas scelerisque nunc. Maecenas eu mauris dui. Curabitur laoreet nibh a hendrerit accumsan. Aenean finibus leo vitae egestas sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et leo a mi sagittis auctor dictum sed ipsum. Duis ornare faucibus blandit.',
            type: String
        },
        shape: {
            default: () => ({
                'clip-path': 'polygon(50% 100%, 0 0, 100% 0)'
            }),
            type: Object
        }
    },
    data() {
        return {
            show: false,
            closedstyle: {
                'width': '0%',
                'padding-left': '0%',
                'padding-right': '0%'
            },
            openstyle: {
                'width': '100%',
                'padding-left': '50%',
                'padding-right': '5%'
            },
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
    pointer-events: none;
    height: 100%;
    width: 100%; 
    filter: drop-shadow(0px 0px 10px #27704f);
}

.text-block {
    height: 90%;
    width: 10%;
    background-color: #4ff8ac;
    top: 0;
    position: absolute;
    margin-left: 45%;
    transition: 0.5s;
    pointer-events: auto;
    overflow-y:auto;
    border-radius: 0px 10px 10px 0px;  
    padding-left: 50%;
    padding-right: 5%;
}

.outer-triangle {
    height: 90%;
    width: 90%;
    background-color: #42b983;
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
}

/* width */
::-webkit-scrollbar {
     width: 20px;
    border-radius: 0px 10px 10px 0px
}

/* Track */
::-webkit-scrollbar-track {
    background-color: #42b983;
    border-radius: 0px 10px 10px 0px
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(189, 255, 203, 0.450); 
    border-radius: 0px 10px 10px 0px
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(189, 255, 203, 0.300); 
}
</style>
