<template>
<div>
<h1>{{$route.params.id}}</h1>
  <div class="itemList">
    <ItemBox :items="items" v-for="item in items" :itemName="item.item_name" :itemPrice="item.item_price" :itemImg="item.item_img"  :itemId="item.id" />
    <p>カテゴリ{{ this.category }}</p>
  </div>
</div>
</template>

<script>
import ItemBox from './ItemBox.vue';

export default {
  components: {
    ItemBox
  },
  props: {
    items : Array,
    categoryItems : Array
  },
  data() {
    return {
      category: this.$route.params.id
    }
  },
}
</script>

<style lang='scss' scoped>
.itemList {
  display : flex;
  flex-wrap : wrap;
  margin: 20px -1.5% 0;
}
h1 {
  font-size:32px;
}
</style>