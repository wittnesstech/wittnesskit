<template>
  <v-app :dark="dark">
    <v-navigation-drawer id="drawer" v-model="primaryDrawer.model" app>
      <!-- <v-icon>fingerprint</v-icon> -->
      <v-list>
        <v-list-tile v-for="item in myRoutes" :key="item.name" :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title :to="item.path">
              <h3>
                {{ item.name }}
              </h3>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <!-- <v-btn to="/about" tag="button">about</v-btn>

      <router-link class="nav-link" to="/home" tag="button">Home</router-link>
      <router-link to="/example" tag="button">Example</router-link>-->
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
        ><v-icon>mdi-menu</v-icon></v-toolbar-side-icon
      >
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <!-- <v-container fluid> -->
      <!-- <v-layout align-center justify-center> -->
      <!-- <v-flex xs10> -->
      <!-- {{ dummyVal }} -->
      <router-view />
      <!-- </v-flex> -->
      <!-- </v-layout> -->
      <!-- </v-container> -->
    </v-content>
    <v-footer :inset="true" app>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import routes from "./router";
import appInfo from "./appInfo";
export default {
  name: "App",
  data: () => ({
    dummyVal: true,
    dark: true,
    primaryDrawer: {
      model: null
      // type: "default (no property)"
      // clipped: true,
      // floating: false,
      // mini: true
    },
    myRoutes: routes.options.routes,
    appTitle: appInfo.title
  }),
  created: function() {},
  mounted: function() {
    // console.log("app mounted :");
    // console.log("pouch :", PouchDB);
  },
  methods: {
    goto: pathstring => {
      this.$router.push(pathstring);
    }
  }
};
</script>
<style scoped>
#drawer {
  /* margin-top: 64px !important; */
  text-transform: capitalize;
}
</style>
