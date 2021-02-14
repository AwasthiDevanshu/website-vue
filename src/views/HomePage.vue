<template>
  <div>
    <CRow>
      <CCol col="12">
        <CCarousel arrows indicators animate width="450px">
          <CCarouselItem
            captionHeader="First Slide"
            image="https://public.cprep.in/uploads/ccca7ddb6397c8deb445/Individual%20Math.jpg"
            captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
          />
          <CCarouselItem
            captionHeader="Blank page"
            :image="{ placeholderColor: 'grey' }"
            captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
          />
          <CCarouselItem
            image="https://wallsdesk.com/wp-content/uploads/2016/12/Disha-Patani-HD-Wallpaper.jpg"
          />
        </CCarousel>
      </CCol>
    </CRow>
    <ChooseUs />
    <we-provide />
  </div>
</template>

<script>
import config from "../constants/config";
import ChooseUs from "./ChooseUs";
import WeProvide from "./WeProvide";

export default {
  name: "Homepage",
  components: {
    ChooseUs,
    WeProvide,
  },
  data() {
    return {
      selected: "Month",
      config: config,
    };
  },
  methods: {},
};
</script>
<style scoped>
.container {
  margin-right: 0px;
  margin-left: 0px;
  padding-right: 0px;
  padding-left: 0px;
  max-width: 100%;
}
</style>

