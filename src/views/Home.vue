<template>
  <v-layout align-center justify-space-around column>
    <!-- qrewwqerewq -->
    <div v-if="isLoading">
      <v-progress-linear
        :indeterminate="true"
        color="purple"
      ></v-progress-linear>
    </div>
  </v-layout>
</template>

<script>
import Helper from "../lib/helper";
// import staticData from "../staticData";
export default {
  data: () => ({
    //surahList needs another component/view
    isLoading: true,
    // languages: staticData.languages,
    fontOptions: [
      { name: "Amiri", style: "serif" },
      { name: "Lalezar", style: "cursive" },
      { name: "Mada", style: "sans-serif" },
      { name: "Katibeh", style: "cursive" },
      { name: "Lateef", style: "cursive" }
    ]
  }),
  components: {},
  mounted: function() {
    // console.log("ssssss", this.selectedSurah.number);
    // this.repaint();
  },
  created: function() {
    // console.log("filtering...");
    // this.translationEdition = this.editionList.filter(function(x) {
    //   return x.identifier === "en.sahih";
    // });
    // console.log("filtering... : ", temp);
    // console.log("staticData loaded:", staticData);
    // this.repaint();
  },
  computed: {
    computedFunc() {
      // console.log("computating");
      //TODO check filter computed  output here
      return 0;
    }
  },
  methods: {
    xxxfunc() {
      console.log("dummy func");
    },

    async repaint() {
      // console.log(
      // "repaint called :",
      // this.alteredSurah,
      // this.alteredTranslation
      // );
      this.isLoading = true;
      // console.log("phase 1");
      // if (this.alteredSurah) {
      await this.loadNewSurah();
      // this.alteredSurah = false;
      // }
      // console.log("phase 2");
      // if (this.alteredTranslation) {
      await this.loadNewTranslation();
      // this.alteredTranslation = false;
      // }

      // console.log("phase 3");

      // console.log("helper here...", Helper);
      this.isLoading = false;
    },
    async loadNewSurah() {
      // console.log(this.$axios);
      // GET request for remote image
      const queryUrl =
        "https://api.alquran.cloud/v1/surah/" + this.selectedSurah.number;
      // console.log("query  ", queryUrl);
      const cachedData = await this.cacheLoader(queryUrl);
      // console.log("cached data :", cachedData);
      if (cachedData !== undefined && cachedData !== null && cachedData) {
        // console.log("is true");
        this.selectedSurah = cachedData.data;
      } else {
        // console.log("is false");
        const queryResponce = await this.queryLoader(queryUrl);
        this.selectedSurah = queryResponce;
        this.saveCache(queryUrl, queryResponce);
      }
    },

    async cacheLoader(x) {
      const cached = await this.$resCache.get(x).catch(err => {
        // console.log("cache data error :", err);
      });
      return cached === undefined ? false : cached;
    },
    async queryLoader(x) {
      const response = await this.$axios({
        method: "get",
        url: x,
        // http://api.alquran.cloud/v1/edition?format=text&language=ur
        responseType: "json"
      }).catch(err => {
        // console.log("query loading error :", err);
      });
      const data = await response.data.data;
      // console.log("query loader response:", data);
      return response === undefined ? false : data;
    },
    saveCache(q, r) {
      this.$resCache.put({
        _id: q,
        data: r
      });
      // console.log("putted", q, r);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Amiri|Katibeh|Lalezar|Lateef|Mada");
@import url("https://fonts.googleapis.com/css?family=Tajawal&display=swap");
.arabicText,
:lang(ar) {
  font-family: "Lateef", cursive !important;
  direction: rtl;
}
.translation {
  /* direction: ltr !important; */
}
.slate {
  /* direction: rtl; */
}

.infoPanel {
  /* font-family: 'Lateef', cursive; */
  /* direction: ltr; */
}

.info_name {
  /* direction: rtl; */
}

.bigText {
  font-size: 4rem;
}

.medText {
  font-size: 2rem;
}

.smallText {
  font-size: 1em;
}
.bordered {
  outline-style: auto;
  outline-color: chartreuse;
  outline-width: 5px;
}
:lang(zh-Hant) {
  font-family: Kai, KaiTi, serif;
}
:lang(zh-Hans) {
  font-family: DFKai-SB, BiauKai, serif;
}
:lang(ur) {
  font-family: "Tajawal", serif;
  direction: rtl;
}
.centertext {
  text-align: center;
}
</style>
