<template>
  <div class="c-app">
    <CWrapper>
      <the-navbar/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </CContainer>
        </main>
        <TheFooter/>
      </div>
    </CWrapper>
  </div>
</template>

<script>
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import TheNavbar from './TheNavbar.vue'

export default {
  name: 'TheContainer',
  components: {
    TheHeader,
    TheFooter,
    TheNavbar
  }
}
</script>

<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.c-main{
  padding-top: 70px;
}
.container-fluid {
  margin-right: 0px;
  margin-left: 0px;
  padding-right: 0px;
  padding-left: 0px;
  max-width: 100%;
}
</style>