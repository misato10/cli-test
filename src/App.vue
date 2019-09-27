<template>
    <div id="wrapper">
        <Header />
        <div class="container">
        <router-view :items="items"></router-view>
        </div>
    </div>
</template>


<script>
import './assets/css/default.css'
import './assets/css/base.css'
import items from './assets/json/item.json'
import Header from './components/include/Header.vue'

export default {
  name: 'app',
  components: {
    Header,
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
#wrapper {
  font-size:1.4rem;
  color: #222;
  line-height:1.6;
}
.container {
  max-width: 980px;
  margin: auto;
  padding: 80px 0;
}
</style>
