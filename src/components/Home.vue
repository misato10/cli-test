<template>
    <div>
        <h1>ALL</h1>
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
h1 {
    text-transform: uppercase;
    font-size: 3.0rem;
    margin-bottom: 20px;

}
</style> 