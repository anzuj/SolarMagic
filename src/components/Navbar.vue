<template>
    <div>
        <v-app-bar height="80" elevation="1">
            <v-toolbar-title class="ml-7">Playground</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-img
                @click="$router.push('/')"
                :src="require('../assets/elance-logo.svg')"
                class="logo"
                contain
                max-height="50"
                max-width="120"
            />
            <v-spacer></v-spacer>
            Go to page:
            <div class="navMenu">
                <v-select
                    hide-details
                    :menu-props="{ bottom: true, offsetY: true }"
                    v-model="currentLink"
                    :items="links"
                    solo
                    background-color="transparent"
                    flat
                >
                    <template v-slot:item="data">
                        <div @click="$router.push(`${data.item.link}`)">
                            <v-icon class="mr-2">{{ data.item.icon }}</v-icon>
                            {{ data.item.value }}
                        </div>
                    </template>

                    <template v-slot:selection="data">
                        <v-icon class="mr-2">{{ data.item.icon }}</v-icon>
                        {{ data.item.value }}
                    </template>
                </v-select>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data: () => ({
        currentLink: "Home",
        links: [
            {
                value: "Home",
                link: "/",
                icon: "mdi-home",
            },
            {
                value: "Register",
                link: "/register",
                icon: "mdi-account-plus",
            },

            // {
            //     text: "Chat",
            //     href: "https://community.vuetifyjs.com",
            // },
            // {
            //     text: "Made with Vuetify",
            //     href: "https://madewithvuejs.com/vuetify",
            // },
            // {
            //     text: "Twitter",
            //     href: "https://twitter.com/vuetifyjs",
            // },
            // {
            //     text: "Articles",
            //     href: "https://medium.com/vuetify",
            // },
        ],
    }),
};
</script>

<style>
.logo:hover {
    cursor: pointer;
}

.navMenu {
    max-width: 200px;
}
</style>
