<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="false" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
        <tags-view v-if="needTagsView" />
      </div>
      <app-main />
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div>
  </div>
</template>

<script>
import RightPanel from '@/components/RightPanel'
import { AppMain, Navbar, Settings, Sidebar, TagsView } from './components'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    RightPanel,
    Settings,
    Sidebar,
    TagsView
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