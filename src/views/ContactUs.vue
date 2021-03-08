<template>
  <div>
    <CToaster :autohide="3000" position="bottom-center">
      <template v-for="toast in fixedToasts">
        <CToast
          :key="'toast' + toast"
          :show="true"
          class="text-white"
          :class="{ 'bg-success': !hasError, 'bg-danger': hasError }"
          >{{ message }}</CToast
        >
      </template>
    </CToaster>
    <CRow>
      <CCol>
        <CCard>
          <CCardBody>
            <CForm @submit.prevent="addEditEnquiry()" wasValidated>
              <CRow>
                <CCol lg="6" md="6" sm="12" xs="12">
                  <CInput
                    label="Name"
                    required
                    v-model="name"
                    placeholder="Enter Name"
                  />
                </CCol>
                <CCol lg="6" md="6" sm="12" xs="12">
                  <CInput
                    type="email"
                    label="Email"
                    required
                    v-model="email"
                    placeholder="Enter email"
                  />
                </CCol>
                <CCol lg="6" md="6" sm="12" xs="12">
                  <CInput
                    label="Mobile"
                    required
                    v-model="mobile"
                    placeholder="Enter mobile"
                  />
                </CCol>
                <CCol lg="6" md="6" sm="12" xs="12">
                  <CInput
                    label="Parent's Name"
                    required
                    v-model="fatherName"
                    placeholder="Enter Parent's name"
                  />
                </CCol>
                <CCol lg="6" md="6" sm="12" xs="12">
                  <CInput
                    label="How Did You Find Us"
                    v-model="source"
                    placeholder="Enter source"
                  />
                </CCol>
                <CCol lg="6" md="6" sm="12" xs="12">
                  <CTextarea
                    label="Address"
                    v-model="address"
                    placeholder="Enter Address"
                  />
                </CCol>
                <CCol lg="6" md="6" sm="12" xs="12">
                  <CTextarea
                    label="Description"
                    v-model="description"
                    placeholder="Enter Description"
                  />
                </CCol>
              </CRow>

              <CRow>
                <CCol lg="6" md="6" sm="12" xs="12" align="center">
                  <CButton type="submit" :disabled="disabled" color="success"
                    >Enquire</CButton
                  >
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
<script>
import { config } from "@/constants/config";
export default {
  methods: {
    addEditEnquiry() {
      this.disabled = true;
      this.enquiryModal = false;
      var param = {};
      var data = {};
      data.companyId = config.companyId;
      data.name = this.name;
      data.email = this.email;
      data.mobile = this.mobile;
      data.status = "open";
      data.description = this.description;
      data.source = this.source;
      var url = "enquiry/enquiry/addEditEnquiry";
      param.data = data;
      param.token = this.getToken();
      this.save("enquiryCount", 0, "session");
      this.ajaxCall(url, param, this.getEnquiryList);
    },
  },
};
</script>