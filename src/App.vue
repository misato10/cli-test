<template>
    <div id="wrapper">
        <Header />
        <div class="container">
        <transition name="fade">
          <router-view :items="items":key="$route.fullPath"></router-view>
        </transition>
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

<style lang='scss' scoped>
#wrapper {
  font-size:1.4rem;
  color: #222;
  line-height:1.6;
}
.container {
  max-width: 1280px;
  margin: auto;
  padding: 120px 0 80px;
  @media (max-width: 1280px) {
    padding-left:30px;
    padding-right:30px;
  }
  @media (max-width: 750px) {
    padding-left:20px;
    padding-right:20px;
  }
}
.fade-enter-active {
  transition: all .8s 0s ease;
}
.fade-enter {
  transform: translate(-100px, 0);
}
</style>
