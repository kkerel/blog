<template>
  <footer>
    <a href="https://github.com/kkerel" target="_blank">GIT</a>
    <a href="http://junesu1104.dothome.co.kr/" target="_blank">포트폴리오</a>
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
  footer{ position:fixed; bottom:0px; left:0px; width: 100%; z-index: 1; padding:10px 0px 10px 250px; background:#323c48; letter-spacing:-4px;
    a{ color:#fff; width:100px; height:40px; line-height:40px; background:#757e89; display:inline-block; *display:inline; text-align:center; border-radius:4px; font-weight:bold; letter-spacing:1px; font-size:12px;
      &:hover{ background:#00b3a5;}
      &:last-child{ margin-left:10px;}
    }
  }
</style>
