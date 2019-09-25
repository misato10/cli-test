<template>
  <div class="itemdetail contents">
    <p>製品詳細</p>
    <h1>id  {{ $route.params.name }}  の製品詳細です。</h1>
  </div>
</template>


<style lang='scss' scoped>
.contents {
  margin: 50px auto 0;
  padding:80px 15px 0;
  width:100%;
  max-width: 1010px;
}
h1 {
  font-size:32px;
}
</style>
