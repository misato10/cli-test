<template>
    <div class="itemDetail">   
         <div class="itemImg">
           <img :src="require('@/assets/'+ item[0].item_img)" alt="">
         </div>
         <div class="info">
           <h1 class="itemName">{{ item[0].item_name }}</h1>
           <p class="itemPrice"><b>&yen;{{ item[0].item_price | priceFilter  }}</b>+税</p>
           <h2>商品説明</h2>
           <p class="itemDescription">{{ item[0].item_description }}</p>
           <button class="btn">カートに入れる</button>
         </div>
    </div>
</template>

<script>

export default {
  props: {
    itemId: Number,
    items : Array
  },
  computed: {
    item: function() {
      return this.items.filter(function(el) {
        return el.id == this.itemId
      }, this)
    },
  }
}


/**/
</script>

<style lang='scss' scoped>
.itemDetail {
  display : flex;
  flex-wrap : wrap;
  .itemImg {
    width:50%;
    padding: 0 3%;
    @media (max-width: 750px) {
      width: 100%;
      margin-bottom: 30px;
    }
    img {
      width: 100%;
    }
  }
  .info {
     width:50%;
     @media (min-width: 751px) {
       padding-left: 40px;
     }
     @media (max-width: 750px) {
      width: 100%;
    }
    .itemName {
font-size: 2rem;
    margin-bottom: 10px;
    }
    .itemPrice {
      b {
        font-size:3.0rem;
        margin-right: 10px;
      }
      margin-bottom:20px;
    }
    h2 {
      font-size:2.2rem;
      margin-bottom: 15px;
    }
    .btn {
      margin-top: 40px;
      color: #fff;
      text-align: center;
      background: #0a3bab;
      border: none;
      width: 100%;
      line-height: 50px;
      font-size: 1.8rem;
      font-weight:600;
      letter-spacing: 0.05em;
      cursor: pointer;
    }
  } 
}


</style>