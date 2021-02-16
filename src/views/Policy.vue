<template>
  <div>
    <CRow>
      <CCol class="text-center">
        <h3>
          {{ policyTitle[this.policyType]}}
        </h3>
        <p v-html="policyText"></p>
      </CCol>
    </CRow>
  </div>
</template>
<script>
import config from "../constants/config";
import { ajaxCallMixin } from "../mixins/HttpCommon";
import { localDb } from "../mixins/localDb";
const policyTitle = {
  1: "Privacy Policy",
  2: "Refund Policy",
  3: "Terms and Conditions",
};
export default {
  name: "Policy",
  data() {
    return {
      policy: "",
      policyType: this.$route.meta.policyType,
      policyTitle: policyTitle,
      policyText: "",
    };
  },
  mixins: [ajaxCallMixin, localDb],

  methods: {
    getCompanyPolicy() {
      let param = {};
      let data = {};
      data.companyId = config.companyId;
      data.policyType = this.policyType;
      let url = "company/company/getPolicyDetails";
      param.data = data;
      param.token = this.token;
      this.ajaxCall(url, param, this.policyCallBack);
    },
    policyCallBack(apiResponse) {
      this.policyText = apiResponse.data.policy;
    },
  },
  created() {
    this.getCompanyPolicy();
  },
};
</script>