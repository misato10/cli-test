<template>
  <div class="itemList">
    <ItemBox :items="items" v-for="item in items" :itemName="item.item_name" :itemPrice="item.item_price" :itemImg="item.item_img" />
  </div>
</template>

<script>
import ItemBox from './ItemBox.vue';

export default {
  components: {
    ItemBox
  },
  props: {
    items : Array
  }
}
</script>

<style lang='scss' scoped>
.itemList {
  display : flex;
  flex-wrap : wrap;
  margin: 20px -1.5% 0;
}
</style>