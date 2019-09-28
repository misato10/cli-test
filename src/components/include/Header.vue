<template>
  <header>
    <div class="inner">
      <nav>
        <ul>
          <router-link to="/" tag="li" active-class="active" exact><a><span>ALL</span></a></router-link>
          <router-link to="/feature/woman" tag="li" active-class="active" exact><a><span>WOMEN</span></a></router-link>
          <router-link to="/feature/man" tag="li" active-class="active" exact><a><span>MAN</span></a></router-link>
          <router-link to="/feature/kids" tag="li" active-class="active" exact><a><span>KIDS</span></a></router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
header {
  position: fixed;
  top:0;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  .inner {
    max-width: 1280px;
    height: 70px;
    color: #fff;
    margin: auto;
  }
  nav {
    font-size: 0;
    li {
      display: inline-block;
      a {
        font-size: 1.6rem;
        font-weight: 700;
        padding: 18px 20px 0;
        display: block;
        height: 70px;
        span {
          position: relative;
          &::after {
            position: absolute;
            content: "";
            height: 2px;
            width: 100%;
            background: rgb(18, 40, 139);
            bottom: -5px;
            left: 0;
            opacity: 0;
          }
        }
      }
      &.active {
        a {
          span {
            &::after {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>