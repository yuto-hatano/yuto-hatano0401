<template>
  <div id="App">
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
  name: 'App',
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer
  },
  created(){
    this.$store.dispatch('getGraphScore')
  }
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

#App {
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
