<template>
    <div id="app">
        <v-app>
            
            <v-main fluid fill-height>
             <Navbar />
                <v-slide-x-reverse-transition :hide-on-leave="true">
                    <router-view></router-view>
                </v-slide-x-reverse-transition>
            </v-main>
        </v-app>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
    name: "",
    props: [""],
    components: {
        Navbar,
    },
    data: () => ({}),
    methods: {},
    computed: {},
};
</script>

<style>
#app {
    font-family: Montserrat, sans-serif;
    color: #25292e;
}
</style>
