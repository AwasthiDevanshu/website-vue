<template>
  <CFooter :fixed=false>
    <CContainer fluid>
     
    <CRow style="color:#fafafa;" align-vertical="center" align-horizontal="center" class="primary-color mu-2 pb-4 pt-4">
      <CCol>
       <h3>Useful Links</h3>
      </CCol>
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

    <CRow align-horizontal="center" >
      <span >Powered by <a href="https://cprep.in" target="_blank">Cprep</a></span>
      
    </CRow>
</CContainer>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
  ,
  data(){
    return {
      companyDetails :{}
    }
  },
  methods:{
    getCompanyDetails(){
      
    }
  }
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
