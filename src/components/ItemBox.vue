<template>
  <div class="box">
    <router-link :to="'/item/' + item.id">
    <figure>
    　<img :src="require('@/assets/'+ item.item_img)" alt="">
    </figure>
    <p class="name">{{ item.item_name }}</p>
    <p class="price"><b>￥{{ item.item_price }}</b> +税</p>
    </router-link>
  </div>
</template>

<script>

export default {
  props: {
    items: Array,
    item: {}
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