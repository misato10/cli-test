<template>
    <div>
        <h1>詳細</h1>
        <p>{{ itemId }}</p>
        <p>{{ item }}</p>
        <p>{{ items }}</p>
        <button @click="match()">クリック</button>
    </div>
</template>

<script>

import items from '../assets/json/item.json'

export default {
  props: {
    itemId: Number,
    /*items : Array*/
  },
  data () {
    return {
      item: 10,
      items: items
    }
  },
  computed: {
    match: function() {
      /*return this.items.filter(function(el) {
        return el.id == 3
      }, this)*/
      return this.item / 2
    }
  },
  /*beforeMount() {
    this.match()
  },*/

}


/**/
</script>