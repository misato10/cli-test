<template>
  <div class="box">
    <router-link :to="'/item/' + itemId">
    <figure>
        <img :src="image_src" alt="">
      </figure>
      <p class="name">{{ itemName }}</p>
      <p class="price">&yen;{{ itemPrice }}</p>
    </router-link>
  </div>
</template>

<script>

export default {
  props: {
    items: Array,
    item: Array,
    itemName: String,
    itemPrice: Number,
    itemImg: String,
    itemId: Number,
  },
  data () {
        return {
            image_src: require('@/assets/'+ this.itemImg)
        }
  }
}
</script>

<style lang='scss' scoped>
.box {
  width: 22%;
  margin: 0 1.5% 40px;
  figure {
    img {
      width: 100%;
    }
  }
  .name {
    color: #666;
    font-size:1.2rem;
    margin-bottom: 5px;
    letter-spacing: .05em;
  }
  .price {
    font-size:1.6rem;
    font-weight: bold;
  }
}
</style>