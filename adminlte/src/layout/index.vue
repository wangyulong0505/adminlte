<template>
  <div class="app-wrapper">
    <div v-if="false" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div>
        <navbar />
        <!--<tags-view />-->
      </div>
      <app-main />
      <!-- <right-panel>
        <settings />
      </right-panel> -->
    </div>
    <footer />
        <!-- <strong>Copyright &copy; 2014-2020 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.1.0-pre
        </div>
        </footer> -->
  </div>
</template>

<script>
// import RightPanel from '@/components/RightPanel'
import { AppMain, Navbar, Settings, Sidebar, Footer } from './components'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    // RightPanel,
    Settings,
    Sidebar,
    Footer
  },

  computed: {
      /*
    ...mapState({
      //sidebar: s => s.app.sidebar,
      //device: s => s.app.device,
      showSettings: false,
      needTagsView: true,
      fixedHeader: true
    }),
    classObj() {
      return {
        hideSidebar: false,
        openSidebar: true,
        withoutAnimation: true,
        mobile: false
      }
    }
    */
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>