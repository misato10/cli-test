<template>
    <div>
        <h1>{{ featureName }}</h1>
        <ItemList02 :items="items"  :featureName="featureName" />
    </div>
</template>

<script>
import ItemList02 from './ItemList02.vue';
export default {
  components: {
    ItemList02
  },
  props: {
    items : Array,
    featureName: String
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