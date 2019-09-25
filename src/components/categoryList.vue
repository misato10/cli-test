<template>
  <div class="contents">
    <p>各カテゴリ一覧</p>
    <CatItemList :items="items" />
  </div>
</template>

<script>
import CatItemList from './CatItemList.vue';

export default {
  components: {
    CatItemList,
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