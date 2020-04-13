<template>
  <div id="footerSection">
    <a
      id="smoothScroll"
      href="#"
      @click="clickSmoothScroll()"
    >
      <img
        id="gotoTop"
        src="@/assets/scroll.png"
        alt="page top"
      >
    </a>

    <div id="footerCopyright">
      <small>©Seattleconsulting</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#Header'),
        400,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style scoped>
#footerSection {
  background: -moz-linear-gradient(top, #80e1f7, #06c1e6);
  background: -webkit-linear-gradient(top, #80e1f7, #06c1e6);
  background: linear-gradient(to bottom, #80e1f7, #06c1e6);
  text-align: center;
}

#footerCopyright {
  font-family: 'Noto Sans JP', sans-serif;
  font-style: bold;
  font-size: 12pt;
  color: #fff;
  padding: 30px;
}

#smoothScroll {
  box-shadow: none;
  border-style: none;

  /* 透過の設定 */
  opacity: 0.5;
  background-size: cover;
}

#gotoTop {
  width: 45px;
  height: 45px;
}
</style>