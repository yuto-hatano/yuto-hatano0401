<template>
  <div id="footerSection">
    <div id="footerCopyright">
      <small>©Seattleconsulting</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#footerSection {
  background: -moz-linear-gradient(top, #80e1f7, #06c1e6);
  background: -webkit-linear-gradient(top, #80e1f7, #06c1e6);
  background: linear-gradient(to bottom, #80e1f7, #06c1e6);
}

#footerCopyright {
  color: #fff;
}
</style>