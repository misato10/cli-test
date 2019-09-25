<template>
  <div id="app">
    <Header />
    <!--<TopContents :items="items" />
    <p>{{ items }}</p>-->
    <router-view :items="items"></router-view>
  </div>
</template>

<script>
import './assets/css/default.css'
import './assets/css/base.css'
import items from './assets/json/item.json'
import Header from './components/include/Header.vue'
/*import TopContents from './components/TopContents.vue'*/

export default {
  name: 'app',
  components: {
    Header,
    /*TopContents*/
  },
  data() {
    return {
      items: items
    }
  },
  beforeMount() {
  },
}
</script>

<style>
#app {
  font-size:1.4rem;
  color: #222;
  line-height:1.6;
}
</style>
