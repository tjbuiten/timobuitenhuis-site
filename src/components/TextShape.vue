<template>
    <div v-on:click="show = !show" class="scale-with-children">
        <div class="text-block" v-on:scroll="onScroll" v-text="text" v-bind:style="show ? openstyle : closedstyle"></div>
        <div class="shape" v-bind:style="outerShape"/>
        <img class="shape" v-bind:src="getImgUrl(imageName)" v-bind:style="innerShape"/>
        <div class="percentage-bar" v-bind:style="show ? [{'width': (48 + 0.52 * percentage) + '%'}, {'padding-left': (1.1 * percentage) + '%'}] : [{'width': 48 + '%'}, {'padding-left': 0 + '%'}] "/>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        imageName: {
            default: 'universe',
            type: String
        },
        text: {
            default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id bibendum tellus, sed tristique mauris. Aliquam erat volutpat. Ut eleifend lorem eget erat condimentum rutrum. Vestibulum pharetra, eros ut commodo vehicula, velit nibh dignissim erat, et consectetur eros nulla a orci. Curabitur imperdiet posuere mattis. Donec commodo fringilla odio sed fermentum. Sed mattis erat in massa faucibus, a hendrerit nisi tempus.Maecenas molestie sollicitudin lorem, non convallis mauris rhoncus quis. Curabitur sollicitudin, nisl eu dapibus auctor, orci mauris vestibulum leo, vitae rhoncus nibh purus eu nibh. Nunc id ultrices enim. Sed id interdum erat, nec pretium nunc. Suspendisse lectus enim, iaculis id convallis id, porta varius tortor. Mauris vel tempus urna, porttitor lacinia justo. Aenean posuere molestie feugiat. Ut mauris nibh, condimentum at arcu nec, tincidunt placerat purus. Etiam hendrerit pellentesque lacus id congue. Vestibulum vel interdum tellus. Mauris eleifend bibendum consequat. In hac habitasse platea dictumst. Nullam quis nunc in elit consectetur tempor sed placerat erat. Fusce consectetur varius placerat. Phasellus tempus felis et tincidunt blandit. Sed fermentum dui et ullamcorper rhoncus.Suspendisse eget purus tellus. Nullam a lacus in felis tincidunt commodo id vel dui. Nullam felis magna, dignissim non fringilla et, interdum id enim. Quisque non felis dapibus elit laoreet aliquet. Praesent ornare libero turpis, vel euismod est fermentum ac. Mauris non imperdiet enim. Donec a elementum est. Sed lobortis, ligula id porta auctor, tellus lacus gravida magna, quis molestie odio quam vel lectus. Nam gravida tempus quam ut fringilla. Praesent hendrerit sem laoreet ante consequat dictum. Nulla vitae eros interdum, pulvinar sem rutrum, bibendum lacus. Sed rhoncus varius faucibus. Duis a odio consequat, egestas nisi in, interdum magna.Nam a lacus ac leo ornare rhoncus eleifend eget nulla. Sed rhoncus dolor aliquet est dictum, sed varius ex mattis. Aenean consectetur enim ac metus ornare, feugiat imperdiet ipsum pretium. Curabitur ornare dignissim quam. Nam ac elementum felis, quis sollicitudin enim. Nulla vehicula orci quis tortor sollicitudin semper. Aliquam vulputate est vitae efficitur euismod. Aenean hendrerit mattis ante nec elementum. Pellentesque volutpat lobortis risus, id rutrum ante dictum vitae. Nam euismod ultricies vehicula. Vestibulum ultrices ornare nulla, sed tempus nisi laoreet et.Cras fermentum sem vitae massa aliquet luctus. Nam odio turpis, pretium ut interdum ut, laoreet at odio. Cras eleifend fermentum odio, ut mattis neque cursus sed. Praesent vel leo risus. Pellentesque elit tortor, porttitor sit amet urna vel, condimentum molestie tortor. Nullam purus lorem, sodales nec interdum sed, malesuada at magna. Vivamus sit amet vulputate neque. Donec interdum nec neque iaculis tempor. Aliquam erat volutpat. Fusce leo lorem, accumsan ac sapien vel, egestas scelerisque nunc. Maecenas eu mauris dui. Curabitur laoreet nibh a hendrerit accumsan. Aenean finibus leo vitae egestas sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et leo a mi sagittis auctor dictum sed ipsum. Duis ornare faucibus blandit.',
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
    data() {
        return {
            show: false,
            closedstyle: {
                'width': '0%',
                'padding-left': '0%',
                'padding-right': '0%',
                'scrollTop': '0'
            },
            openstyle: {
                'width': '100%',
                'padding-left': '50%',
                'padding-right': '60%',
                'scrollTop': '0'
            },
            percentage: 0
        }
    },
    methods: {
        getImgUrl: function (imageName:string) {
            return require('@/assets/' + imageName + '.jpg')
        },
        onScroll: function (evt) {
            let post = evt.target;
            let st = post.scrollTop;
            let sh = post.scrollHeight;
            let ch = post.clientHeight;
            
            this.percentage = Math.floor((st / (sh - ch)) * 100);
        }
    }
}
</script>

<style scoped>
.percentage-bar {
    clip-path: polygon(0 0, 100% 0%, 98.8% 100%, 0% 100%);
    width: 48%;
    height: 4%;
    padding-left: 0%;
    margin-left: 50%;
    position: absolute;
    top: 0;
    background-color: #42b983;
}
.content {
  padding: 100px 0;
  margin: 50px auto 0 auto;
  width: 80%;
}

.scale-with-children {
    height: 100%;
    width: 100%;
    transition: 0.5s;
    pointer-events: none;
    cursor: pointer;
    filter: drop-shadow(0px 0px 10px #27704f);
    align-content: center;
    /* background-color: rgb(222, 124, 235) */
}

.shape:hover {
    opacity: 0.75;
}

.shape {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    background-color: #42b983;
    pointer-events: auto;
    background-position: center;
    background-size: cover;
}

.text-block {
    height: 100%;
    width: 0%;
    background-color: #4ff8ac;
    margin-left: 50%;
    transition: 0.5s;
    pointer-events: auto;
    overflow-y: scroll;
    border-radius: 0px 10px 10px 0px;  
    font-size: 20px;  
    padding-left: 50%;
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
}

.text-block::-webkit-scrollbar {
    
    width: 0px;
    background: transparent; /* make scrollbar transparent */
    /* width: 12px;
    border-radius: 0px 10px 10px 0px; */
}

.text-block::-webkit-scrollbar-track {
    background-color: #42b983;
    border-radius: 0px 10px 10px 0px;
    transform: skew(-7.77deg);
}
 
.text-block::-webkit-scrollbar-thumb {
    background: rgba(189, 255, 203, 0.450); 
    border-radius: 0px 10px 10px 0px;
}

.text-block::-webkit-scrollbar-thumb:hover {
    background: rgba(189, 255, 203, 0.300); 
}
</style>
