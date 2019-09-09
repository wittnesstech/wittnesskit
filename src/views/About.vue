<template>
  <v-container fluid>
    <div class="about">
      <v-card>
        <v-card-title primary-title>
          <h2>Mission Statement</h2>
        </v-card-title>
        <!-- <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>-->

        <!-- <v-layout row justify-space-around> -->
        <v-card-text>
          <v-flex>
            <p>
              We at WittNess technologies <strong>BELIEVE</strong> in
              contributing for a better tomorrow. Our teams are full of nerds
              who want to actively bring change in your environments and
              communities
            </p>
            <p>
              Everyday lives are drastically eased out by applying a tiny
              adjustment, finding that adjustment and getting it to work is Our
              <strong>GOAL</strong>
            </p>
          </v-flex>
        </v-card-text>
        <!-- </v-layout> -->
        <!-- <div> {{ card_text }} </div> -->

        <v-card-actions>
          <!-- <v-btn flat color="orange">Share</v-btn> -->
          <!-- <v-btn flat color="orange">Explore</v-btn> -->
          <v-flex>
            <v-btn v-for="mem of socialData" href="mem.url">
              <v-icon>{{ mem.icon }}</v-icon>
              {{ mem.name }}
            </v-btn>
            <!-- <v-icon>mdi-linux</v-icon> -->
            <!-- <v-layout row class="d-flex align-content-space-around flex-wrap"> -->
          </v-flex>
          <!-- </v-layout> -->
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>
<style scoped>
.v-card {
  /* text-align: left; */
  /* margin: 10%; */
  /* padding: 1em; */
}
</style>
<script>
export default {
  data: () => ({
    socialData: [
      {
        name: "github",
        icon: "mdi-github-face",
        url: "https://github.com/wittnesstech"
      },
      {
        name: "twitter",
        icon: "mdi-twitter",
        url: "https://twitter.com/wittnesstech"
      },
      {
        name: "facebook",
        icon: "mdi-facebook",
        url: "https://www.facebook.com/WittnessTech/"
      },
      {
        name: "medium",
        icon: "mdi-medium",
        url: "https://medium.com/wittness"
      }
    ]
  })
};
</script>
