<template>
  <CFooter :fixed=false>
    <CContainer>
    <CRow style="background-color:#311b92;color:#fafafa;">
      <CCol lg="12">
        <CLink href="about-us" class="c-link">About us </CLink>
      </CCol>
      <CCol lg="12">

        <CLink class="c-link" href="refund-policy">Refund Policy</CLink>
        </CCol>
      <CCol lg="12">
        <CLink class="c-link" href="privacy-policy">Privacy Policy</CLink>
        </CCol>
      <CCol lg="12">
        <CLink class="c-link" href="terms-and-conditions">Terms & conditions </CLink>
      </CCol>
    </CRow>

    <CRow align-horizontal="center">
      <span >Powered by <a href="https://cprep.in" target="_blank">Cprep</a></span>
      
    </CRow>
</CContainer>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
<style scoped>
.c-link {
  color:#fafafa
}
.container{
      margin-right: 0px;
    margin-left: 0px;
    padding-right: 0px;
    padding-left: 0px;
    max-width: 100%;
}
</style>
