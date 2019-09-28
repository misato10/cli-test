<template>
<div>
<!--<p>商品一覧です {{ featureName }}</p>-->
<div class="itemList">
    <ItemBox :itemsFiltered="items" v-for="item in itemsFiltered" :item="item"  />
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
    featureName: String
  },
  computed: {
    itemsFiltered: function() {
      return this.items.filter(function(el) {
        return el.item_gender == this.featureName
      }, this)
    },
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