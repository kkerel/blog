<template>
  <footer>
    <div class="button">
      <div class="button_cover"></div>
      <a href="https://github.com/kkerel" target="_blank">GIT</a>
    </div>
    <div class="button">
      <div class="button_cover"></div>
      <a href="https://kkerel.github.io/official_portfolio/" target="_blank">포트폴리오</a>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  footer{ position:fixed; bottom:0px; left:0px; width: 100%; z-index: 1; padding:10px 0px 10px 250px; background:#323c48;
    .button{ width:140px; height:50px; border:2px solid #fff; float:left; text-align:center; cursor:pointer; position:relative; box-sizing:border-box; overflow:hidden; background:#fff; margin-right:10px; background:#323c48;
      .button_cover{width:140px; height:50px; top:-50px; background:#fff; position:absolute; transition:all .5s ease; z-index:1;}
      a{font-size:16px; color:#fff; text-decoration:none; line-height:50px; transition:all .5s ease; z-index:2; position:relative; display:block; font-weight:bold;}
      &:hover{
        a{color:#34495e;}
        .button_cover{top:0;}
      }
    }
  }
</style>
