<template>
  <div id="ポートフォリオ">
    <Header />
    <Main />
    <About />
    <Skill />
    <Vision />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import Footer from './components/Footer.vue'


export default {
  name: '',
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer
  }
}
</script>

<style>
@import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
</style>
