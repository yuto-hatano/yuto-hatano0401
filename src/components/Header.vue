<template>
  <div id="Header">
    <button
      id="button"
      class="btn btn-success"
      @click="toggle"
    >
      <img
        id="humburger"
        src="@/assets/humburger.png"
        alt="メニュー"
      >
    </button>
    
    <Drawer
      id="drawerSection"
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open">
        <span @click="innerOpen=true">
          <Menu @Menu-close="toggle" />
        </span>
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";
import Menu from "./Menu"


export default {
  name: 'Header',
  components: {
    Drawer,
    Menu
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
  "~bootstrap/scss/buttons";

$--simple-drawer-bg-color:#f3f3f3;

@import "~vue-simple-drawer/src/index";
</style>

<style scoped>
#Header {
  background-color: #f3f3f3;
  width: 100%;
  height: auto;
}

#button {
  width: 60px;
  height: 50px;
  box-shadow: none;
  border-style: none;

  /* 透過の設定 */
  opacity: 0.3;
  background-color: #f3f3f3;
  background-size: cover;
}

#humburger {
  height: 47%;
  width: 47%;
}
</style>

