<template>
  <div>
    <CRow v-show="showCourseList">
      <CCol lg=3 md=4 sm=2 v-for="course in courseList" :key="course.courseId">
        <CCard
        >
        <CCardImg variant="top" :src="course.thumbnail">
        </CCardImg>
        <CCardBody><CCardTitle> {{course.courseName}}</CCardTitle>
        </CCardBody>
        <CCardFooter>
          <CLink class="btn btn-outline-info btn-lg" :href="config.androidappurl">Get Now</CLink></CCardFooter
        >
        </CCard>
      </CCol>
      
    </CRow>
  </div>
</template>

<script>
import  config  from '../constants/config';
import { ajaxCallMixin } from "../mixins/HttpCommon";
import { localDb } from "../mixins/localDb";



const fields = [
  { key: "courseId", _style: "width:10%" },
  { key: "courseName", _style: "width:20%" },
  { key: "price", _style: "width:10%" },
  {
    key: "actions",
    label: "",
    _style: "width:20%;",
    sorter: false,
    filter: false,
  },
];
export default {
  name: "CourseList",
  mixins: [ajaxCallMixin, localDb],
  created() {
    this.getCourseList();
  },
  data() {
    return {
      
      fields,
      details: [],
      courseName: "",
      collapseDuration: 0,
      showCourseList: false,
      courseList: [],
      companyId: 0,
      config:config
    };
  },
  methods: {
   
    generateCourseList(apiResponse) {
      if (apiResponse.error != true) {
        var course = apiResponse.data.courseList;
        this.courseList = course;
        
      }
    },
    getCourseList() {
      var param = {};
      var data = {};
      data.limit = 0;
      data.companyId = config.companyId;
      var url = "course/course/getVideoCourseList";
      param.data = data;
      param.token = this.getToken();
      this.ajaxCall(url, param, this.generateCourseList);
      this.showCourseList = true;
    },
   
  },
};
</script>
