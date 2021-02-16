<template>
  <CNavbar  fixed="top" expandable="md" style="color:#ffffff" class="primary-color">
    <CToggler in-navbar @click="collapsed = !collapsed"/>
    <CNavbarBrand href="#">
        <CIcon 
        class="c-sidebar-brand-full" 
        :src=logo
        size="custom-size" 
        :height="35" 
        viewBox="0 0 556 134"
      >
        </CIcon>
    </CNavbarBrand>
    <CCollapse :show="collapsed" navbar>
      <CNavbarNav class="ml-auto">
    <CRenderFunction class="mr-4" flat :content-to-render="$options.nav"/>
      <!-- Right aligned nav items -->
      </CNavbarNav>
    </CCollapse>
  </CNavbar>
</template>


<script>
import nav from './_navbar'
import config from "../constants/config";

export default {
    name: 'TheNavbar',
      nav,
      components: {
        config
      },
  
  data () {
    return {
      collapsed: false,
      logo:config.logo
    }
  }
}
</script>
<style >
.nav-link{
  color:#fafafa
}
</style>
