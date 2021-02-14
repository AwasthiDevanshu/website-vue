<template>
  <div>
    <CRow class="choose-us d-flex justify-content-center text-center">
      <CCol col="12">
        <h2>Why Choose Us?</h2>
      </CCol>
    </CRow>
    <CRow alignHorizontal="center" align-vertical="center" class="ml-4 mb-4">
      <CCol lg="6" sm="12" xs="12">
        <CCol>
          <CIcon class="icon" src="/whychooseus/chooseus1.png" />
          <span>Tested Learning Pedagogy </span>
        </CCol>
      </CCol>
      <CCol lg="6" sm="12" xs="12">
        <CCol>
          <CIcon class="icon" src="/whychooseus/chooseus2.png" /> Highest
          Success Rate
        </CCol>
      </CCol>
      <CCol lg="6" sm="12" xs="12">
        <CCol>
          <CIcon class="icon" src="/whychooseus/chooseus3.png" /> Learn from
          Best Teachers
        </CCol>
      </CCol>
      <CCol lg="6" sm="12" xs="12">
        <CCol>
          <CIcon class="icon" src="/whychooseus/chooseus4.png" /> Personal
          Mentorship
        </CCol>
      </CCol>
      <CCol lg="6" sm="12" xs="12">
        <CCol>
          <CIcon class="icon" src="/whychooseus/chooseus5.png" /> Scientifically
          Designed Study Material
        </CCol>
      </CCol>
      <CCol lg="6" sm="12" xs="12">
        <CCol>
          <CIcon class="icon" src="/whychooseus/chooseus6.png" /> Highly
          competitive peer group
        </CCol>
      </CCol>
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
  name: "ChooseUs",
  components: {},
};
</script>
<style scoped>
.choose-us {
  padding: 2em 0;
  overflow: hidden;
  margin: 1em 0;
}

.choose-us .icon {
  width: 51px;
  height: 51px;
  float: left;
  margin-right: 2em;
}
</style>