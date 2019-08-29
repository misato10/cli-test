<template>
  <div>
    <h2 class="ttl">新着商品</h2>
    <ItemList :items="items" />
  </div>
</template>

<script>
import ItemList from './ItemList.vue';

export default {
  components: {
    ItemList
  },
  props: {
    items : Array
  }
}
</script>

<style lang='scss' scoped>
.ttl {
    font-size: 2.4rem;
    letter-spacing: .05em;
    text-align: center;
    margin-bottom: 40px;
}
</style>