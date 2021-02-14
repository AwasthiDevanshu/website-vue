<template>
  <div>
    <CRow class="choose-us d-flex justify-content-center text-center">
      <CCol col="12">
        <h2>We Provide?</h2>
      </CCol>
    </CRow>
    <CRow class="choose-us d-flex justify-content-lg-center">
        <CCol lg="3" md="6"><CCard><CCardImg height="200px" src="/weprovide/classroom.jpg"/><CCardBody align="center" >Classroom Courses</CCardBody></CCard></CCol>
        <CCol lg="3" md="6"><CCard><CCardImg height="200px" src="/weprovide/liveclasses.jpg"/><CCardBody align="center" >Live Clasess - Online</CCardBody></CCard></CCol>
        <CCol lg="3" md="6"><CCard><CCardImg height="200px" src="/weprovide/recordedclasses.jpg"/><CCardBody align="center" >Recorded Clasess </CCardBody></CCard></CCol>
        <CCol lg="3" md="6"><CCard><CCardImg height="200px" src="/weprovide/testseries.jpg"/><CCardBody align="center" >Test Series </CCardBody></CCard></CCol>
    </CRow>

    <CRow alignHorizontal="center">
      <CLink href="/courses" class="btn btn-outline-info btn-lg"
        >Discover Courses</CLink
    >
    </CRow>
  </div>
</template>

<script>

export default {
  name: 'WeProvide',
  components: {
  }
}
</script>
<style scoped>
.choose-us {
    padding: 2em 0;
    overflow: hidden;
    margin: 1em 0;
}
.choose-us .text {
    width: 50%;
    float: left;
    margin-bottom: 1.3em;
    text-align: left;
    line-height: 50px;
}
.choose-us .icon {
    width: 51px;
    height: 51px;
    float: left;
    margin-right: 2em;
}
</style>