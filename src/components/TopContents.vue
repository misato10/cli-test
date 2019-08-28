<template>
  <div class="contents">
    <p>TOPのコンテンツ</p>
    <AllItem :items="items" />
  </div>
</template>

<script>
import AllItem from './AllItem.vue';

export default {
  components: {
    AllItem
  },
  props: {
    items : Array
  }
}
</script>

<style lang='scss' scoped>
.contents {
  margin: 50px auto 0;
  padding:80px 15px 0;
  width:100%;
  max-width: 1010px;
}
</style>