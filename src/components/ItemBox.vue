<template>
  <div class="box">
    <a href="#">
    　<figure>
        <img :src="image_src" alt="">
      </figure>
      <p class="name">{{ itemName }}</p>
      <p class="price">{{ itemPrice }}円</p>
    </a>
  </div>
</template>

<script>

export default {
  props: {
    items: Array,
    item: Array,
    itemName: String,
    itemPrice: Number,
    itemImg: String
  },
  data () {
        return {
            image_src: require('@/assets/'+ this.itemImg)
        }
  }
}
</script>

<style lang='scss' scoped>
</style>